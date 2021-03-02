const Manager = require("../lib/Manager");

describe("Manager", () => {
   it("should return the input name via the Employee class when getName is called", () => {
      const testEmp = new Manager("John Manager", "jmanager@test.com", 1);

      expect(testEmp.getName()).toBe("John Manager");
   });

   it("should return the input email via the Employee class when getEmail is called", () => {
      const testEmp = new Manager("John Manager", "jmanager@test.com", 1);

      expect(testEmp.getEmail()).toBe("jmanager@test.com");
   });

   it("should return the input office number when getOfficeNum is called", () => {
      const testEmp = new Manager("John Manager", "jmanager@test.com", 1);

      expect(testEmp.getOfficeNum()).toEqual(1);
   });

   it("should return 'Manager' when getRole is called", () => {
      const testEmp = new Manager("John Manager", "jmanager@test.com", 1);

      expect(testEmp.getRole()).toBe("Manager");
   });
})