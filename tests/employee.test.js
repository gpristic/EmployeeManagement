const { it, expect, test } = require('@jest/globals');
const { describe } = require('yargs');
const Employee = require('../lib/employee');

describe("Employee Class", () => {
    describe("Employee methods", () => {
      it("should create a new employee if provided with valid arguments", () => {
          const employee = new Employee("Griffin", 20, "test@email.com");

          expect(employee.name).toEqual("Griffin");
          expect(employee.id).toEqual(20);
          expect(employee.email).toEqual("test@email.com");
          expect(employee.role).toEqual("Employee");
      });
    });
});