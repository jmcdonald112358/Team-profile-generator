const Employee = require("../lib/Employee");

describe("Employee", () => {
   it("should automatically increment the ID with each new instance", () => {
      const emp1 = new Employee();
      const emp2 = new Employee();

      expect(emp2.getId()).toEqual(emp1.getId() + 1);
   });

   it("should return the input name when getName is called", () => {
      const testEmp = new Employee("John Tester", "email@test.com");

      expect(testEmp.getName()).toBe("John Tester");
   });

   it("should return the input email when getEmail is called", () => {
      const testEmp = new Employee("John Tester", "email@test.com");

      expect(testEmp.getEmail()).toBe("email@test.com");
   });

   it("should return 'Employee' when getRole is called", () => {
      const testEmp = new Employee("John Tester", "email@test.com");

      expect(testEmp.getRole()).toBe("Employee");
   });
})