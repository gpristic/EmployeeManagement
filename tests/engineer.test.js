const { expect } = require('@jest/globals');
const Engineer = require('../lib/engineer');

describe("Engineer Class", () => {
    describe("Engineer methods", () => {
      it("should create a new employee if provided with valid arguments", () => {
          const engineer = new Engineer("Griffin", 20, "test@email.com", "testgithub");

          expect(engineer.name).toEqual("Griffin");
          expect(engineer.id).toEqual(20);
          expect(engineer.email).toEqual("test@email.com");
          expect(engineer.github).toEqual("testgithub");
          expect(engineer.role).toEqual("Engineer");
      });
    });
});