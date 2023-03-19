import "@testing-library/cypress/add-commands";
import intructions from "../../src/constants/intructions";
import { TIME_WHILE_COMPARING } from "../../src/constants/variablesToGame";
import { ICharacters } from "../../src/models/endPointsModel";

/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

declare global {
  namespace Cypress {
    interface Chainable {
      watchLoading(): Chainable<void>;
      shouldShowHeader(): Chainable<void>;
      verifyCard(card: ICharacters, isVisible?: boolean): Chainable<void>;
      completeBoard(cards: ICharacters[]): Chainable<void>;
      verifyGameOverPage(): Chainable<void>;
      verifyInstructions(): Chainable<void>;
    }
  }
}

Cypress.Commands.add("watchLoading", () => {
  cy.findByText("Bienvenido a Ricky & Morty game").should("be.visible");
  cy.findByAltText("loading").should("be.visible");
  cy.wait(2000);

  cy.findByText("Bienvenido a Ricky & Morty game").should("not.exist");
  cy.findByAltText("loading").should("not.exist");
});

Cypress.Commands.add("shouldShowHeader", () => {
  cy.findByText("Juego de memoria").should("be.visible");
  cy.findByAltText("title of game").should("be.visible");
});

Cypress.Commands.add(
  "verifyCard",
  ({ id, position = 0, image, name, species, status }, isVisible = true) => {
    if (isVisible) {
      cy.findByTestId(`card-${id}${position || ""}`)
        .findByRole("img")
        .should("have.attr", "src", image);
      cy.findByTestId(`card-${id}${position || ""}`)
        .get(`[title="${name}"]`)
        .contains(name);
      cy.findByTestId(`card-${id}${position || ""}`)
        .findByText(`${status} - ${species}`)
        .should("be.visible");
    } else {
    }
  }
);

Cypress.Commands.add("completeBoard", (cards) => {
  const trickToCompleteGame = [
    [0, 6],
    [1, 7],
    [2, 8],
    [3, 9],
    [4, 10],
    [5, 11],
  ];

  trickToCompleteGame.forEach(([firstCard, secondCard], index) => {
    cy.findAllByTestId(/card-/).eq(firstCard).click();
    cy.findAllByTestId(/card-/).eq(secondCard).click();
    cy.verifyCard({ ...cards[firstCard], position: firstCard });
    cy.verifyCard({ ...cards[secondCard], position: secondCard });

    cy.wait(TIME_WHILE_COMPARING);

    if (index < trickToCompleteGame.length - 1) {
      cy.findAllByTestId(/card-/).eq(firstCard).should("not.be.visible");
      cy.findAllByTestId(/card-/).eq(secondCard).should("not.be.visible");

      cy.findByText(`Aciertos: ${index + 1}`).should("be.visible");
      cy.findByText(`Turnos: ${index + 1}`).should("be.visible");
    }
  });
});

Cypress.Commands.add("verifyGameOverPage", () => {
  cy.findByText("¡Felicitaciones!").should("be.visible");
  cy.findByText("Terminaste el juego con 6 turnos");
  cy.findByRole("link", { name: "Repetir" });
  cy.findByRole("link", { name: "Inicio" });
});

Cypress.Commands.add("verifyInstructions", () => {
  intructions.map((intruction) => {
    cy.findByText(intruction).should("be.visible");
  });

  cy.findByRole("checkbox", {
    name: "No volver a ver las instrucciones",
  }).should("be.visible");

  cy.findByRole("button", { name: "Empezar" }).should("be.visible");
  cy.findByRole("button", { name: "Empezar" }).click();
});
