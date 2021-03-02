const Intern = require("../lib/Intern");

describe("Intern", () => {
   it("should return the input name via the Employee class when getName is called", () => {
      const testEmp = new Intern("Jonny Intern", "jintern@test.com", "U of U");

      expect(testEmp.getName()).toBe("Jonny Intern");
   });

   it("should return the input email via the Employee class when getEmail is called", () => {
      const testEmp = new Intern("Jonny Intern", "jintern@test.com", "U of U");

      expect(testEmp.getEmail()).toBe("jintern@test.com");
   });

   it("should return the input school name when getSchool is called", () => {
      const testEmp = new Intern("Jonny Intern", "jintern@test.com", "U of U");

      expect(testEmp.getSchool()).toBe("U of U");
   });

   it("should return 'Intern' when getRole is called", () => {
      const testEmp = new Intern("Jonny Intern", "jintern@test.com", "U of U");

      expect(testEmp.getRole()).toBe("Intern");
   });
})