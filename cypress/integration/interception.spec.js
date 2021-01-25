const { _ } = Cypress;

describe("test", () => {
  it("intercept", () => {
    cy.visit("http://localhost:3000");
    cy.intercept("http://localhost:3000/spoons", (req) => {
      req.reply((res) => {
        res.send({ fixture: "example.json" });
      });
    });
  });
});
