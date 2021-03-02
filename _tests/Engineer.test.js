const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
   it("should return the input name via the Employee class when getName is called", () => {
      const testEmp = new Engineer("Jonny Engineer", "jengineer@test.com", "jonnyEngineer");

      expect(testEmp.getName()).toBe("Jonny Engineer");
   });

   it("should return the input email via the Employee class when getEmail is called", () => {
      const testEmp = new Engineer("Jonny Engineer", "jengineer@test.com", "jonnyEngineer");

      expect(testEmp.getEmail()).toBe("jengineer@test.com");
   });

   it("should return the input GitHub username when getGithub is called", () => {
      const testEmp = new Engineer("Jonny Engineer", "jengineer@test.com", "jonnyEngineer");

      expect(testEmp.getGithub()).toBe("jonnyEngineer");
   });

   it("should return 'Engineer' when getRole is called", () => {
      const testEmp = new Engineer("Jonny Engineer", "jengineer@test.com", "jonnyEngineer");

      expect(testEmp.getRole()).toBe("Engineer");
   });
})