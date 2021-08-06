const Intern = require('../lib/intern');

describe("Intern Class", () => {
    describe("Intern methods", () => {
      it("should create a new intern if provided with valid arguments", () => {
          const intern = new Intern("Griffin", 20, "test@email.com", "Case");

          expect(intern.name).toEqual("Griffin");
          expect(intern.id).toEqual(20);
          expect(intern.email).toEqual("test@email.com");
          expect(intern.school).toEqual("Case");
          expect(intern.role).toEqual("intern");
      });
    });
});