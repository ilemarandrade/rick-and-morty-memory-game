import routes from "../../src/constants/routes";
import { ICharacters } from "../../src/models/endPointsModel";
import {
  TIME_TO_CLOSE_ALL_CARDS,
  TIME_WHILE_COMPARING,
} from "../../src/constants/variablesToGame";

describe("Play page", () => {
  let cards: ICharacters[] = [];

  beforeEach(() => {
    cy.intercept("**/character").as("getCharacters");
    cy.visit("/");
    cy.wait("@getCharacters").then((xhr) => {
      cards = [
        ...xhr.response?.body.results.slice(0, 6),
        ...xhr.response?.body.results.slice(0, 6),
      ] as ICharacters[];
    });
    cy.watchLoading();
    cy.findByRole("link", { name: "Jugar" }).click();
  });

  it("Should render correctly the instructions", () => {
    cy.findByRole("heading", { name: "Intrucciones" }).should("be.visible");

    cy.verifyInstructions();

    cy.url().should("include", routes.PLAY);

    cy.findByText("Aciertos: 0").should("be.visible");
  });

  describe("Should play correctly", () => {
    beforeEach(() => {
      cy.findByRole("button", { name: "Empezar" }).should("be.visible");
      cy.findByRole("button", { name: "Empezar" }).click();

      cy.findByText("Aciertos: 0").should("be.visible");
      cy.findByText("Turnos: 0").should("be.visible");
    });

    it("Should show the board with the cards and close all after 3 seconds", () => {
      cards.forEach((card, position) => {
        if (card) {
          cy.verifyCard({ ...card, position });
        }
      });

      cy.wait(TIME_TO_CLOSE_ALL_CARDS);

      cards.forEach((card, position) => {
        cy.verifyCard({ ...card, position }, false);
      });
    });
    describe("Card comparison behavior", () => {
      beforeEach(() => {
        cy.wait(TIME_TO_CLOSE_ALL_CARDS);
      });

      it("should close the card for not being equal after 1 second of comparison", () => {
        cy.findAllByTestId(/card-/).eq(0).click();
        cy.findAllByTestId(/card-/).eq(1).click();
        cy.verifyCard({ ...cards[0], position: 0 });
        cy.verifyCard({ ...cards[1], position: 1 });

        cy.wait(TIME_WHILE_COMPARING);
        cy.verifyCard({ ...cards[0], position: 0 }, false);
        cy.verifyCard({ ...cards[1], position: 1 }, false);
      });

      it("should hide the card for being equal after 1 second of comparison", () => {
        cy.findAllByTestId(/card-/).eq(0).click();
        cy.findAllByTestId(/card-/).eq(6).click();
        cy.verifyCard({ ...cards[0], position: 0 });
        cy.verifyCard({ ...cards[6], position: 6 });

        cy.wait(TIME_WHILE_COMPARING);
        cy.findAllByTestId(/card-/).eq(0).should("not.be.visible");
        cy.findAllByTestId(/card-/).eq(6).should("not.be.visible");
      });

      it("should complete the entire board and go to game over page.", () => {
        cy.completeBoard(cards);

        cy.url().should("include", routes.GAME_OVER);
      });

      it("should complete the entire board and see the final message.", () => {
        cy.completeBoard(cards);
        cy.verifyGameOverPage();
      });

      it("should play twice in a row.", () => {
        cy.completeBoard(cards);
        cy.verifyGameOverPage();
        cy.findByRole("link", { name: "Repetir" }).click();
        cy.verifyInstructions();
        cy.wait(TIME_TO_CLOSE_ALL_CARDS);
        cy.findByText("Aciertos: 0").should("be.visible");
        cy.findByText("Turnos: 0").should("be.visible");
        cy.completeBoard(cards);
        cy.verifyGameOverPage();
      });
      it("should play and then go to start.", () => {
        cy.completeBoard(cards);
        cy.verifyGameOverPage();
        cy.findByRole("link", { name: "Inicio" }).click();
        cy.url().should("include", routes.HOME);
      });
    });
  });
});

it("should redirect to home if no characters exist.", () => {
  cy.visit(routes.GAME_OVER);
  cy.url().should("include", routes.HOME);
  cy.visit(routes.PLAY);
  cy.url().should("include", routes.HOME);
});
