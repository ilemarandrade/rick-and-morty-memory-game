import routes from "../../src/constants/routes";
import { ICharacters } from "../../src/models/endPointsModel";

describe("Home", () => {
  it("Should render correct without errors", () => {
    cy.intercept("**/character").as("getCharacters");

    cy.visit(routes.HOME);

    cy.wait("@getCharacters").then((xhr) => {
      const response = xhr.response?.body?.results;

      // loading
      cy.watchLoading();

      // title
      cy.shouldShowHeader();

      cy.findByText("Personajes").should("be.visible");

      response.forEach((character: ICharacters) => {
        const { id, image, name, status, species } = character;

        cy.findByTestId(`card-${id}`)
          .findByRole("img")
          .should("have.attr", "src", image);
        cy.findByTestId(`card-${id}`).get(`[title="${name}"]`).contains(name);
        cy.findByTestId(`card-${id}`)
          .findByText(`${status} - ${species}`)
          .should("be.visible");
      });

      cy.findByRole("link", { name: "Jugar" }).should("be.visible");
      cy.findByRole("link", { name: "Jugar" }).click();

      cy.url().should("include", routes.PLAY);
    });

    //
  });
});
