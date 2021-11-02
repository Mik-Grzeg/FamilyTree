const { allFormInputErrors } = require("../tools/allFormInputErrors");

describe("Main page (when not logged in)", () => {
  before(() => {
    cy.visit("/").wait(2500);
  });

  it("has header element", () => {
    cy.findByRole("banner").contains(/family tree generator/i);
  });

  it("has form element", () => {
    cy.findByRole("form").should("exist");
  });

  it("has two change form buttons", () => {
    cy.findAllByRole("button", { name: /register/i }).should("exist");
    cy.findAllByRole("button", { name: /log in/i }).should("exist");
  });

  it("has two inputs - username and password inside a form", () => {
    cy.findByRole("form").within(() => {
      cy.findByLabelText(/username/i).should("exist");
      cy.findByLabelText(/password/i).should("exist");
    });
  });

  it("displays log in form by default", () => {
    cy.findAllByRole("button", { name: /log in/i }).should("have.length", 2);
    cy.findAllByRole("button", { name: /register/i }).should("have.length", 1);
  });

  it("changes form to register and back", () => {
    cy.findByRole("button", { name: /register/i }).click();
    cy.findAllByRole("button", { name: /register/i }).should("have.length", 2);
    cy.findAllByRole("button", { name: /log in/i }).should("have.length", 1);

    cy.findByRole("button", { name: /log in/i }).click();
    cy.findAllByRole("button", { name: /log in/i }).should("have.length", 2);
    cy.findAllByRole("button", { name: /register/i }).should("have.length", 1);
  });

  it("doesn't display error messages by default", () => {
    allFormInputErrors(false);
  });

  it("displays error messages when empty form is submitted", () => {
    cy.findAllByRole("button", { name: /log in/i })
      .eq(1)
      .click();
    allFormInputErrors(true);
  });

  it("doesn't display error messages when proper values are passed", () => {
    cy.get("input").each((input) => {
      cy.wrap(input).type("test-test");
    });

    allFormInputErrors(false);
  });

  it("displays error message when values of improper length are passed", () => {
    cy.get("input").each((input) => {
      cy.wrap(input).type("{selectall}te");
    });

    allFormInputErrors(true);
  });
});
