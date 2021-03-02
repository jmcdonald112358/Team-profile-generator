class Employee {
   static count = 1; 

   constructor(name, email) {
      this.name = name;
      this.id = Employee.count++;
      this.email = email;
   }

   getName() {
      return this.name;
   }

   getId() {
      return this.id;
   }

   getEmail() {
      return this.email;
   }

   getRole() {
      return "Employee";
   }
}

module.exports = Employee;