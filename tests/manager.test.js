const Manager = require('../lib/manager');

describe("Manager Class", () => {
    describe("Manager methods", () => {
      it("should create a new manager if provided with valid arguments", () => {
          const manager = new Manager("Griffin", 20, "test@email.com", 25);

          expect(manager.name).toEqual("Griffin");
          expect(manager.id).toEqual(20);
          expect(manager.email).toEqual("test@email.com");
          expect(manager.office).toEqual(25);
          expect(manager.role).toEqual("intern");
      });
    });
});