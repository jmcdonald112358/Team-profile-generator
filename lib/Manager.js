const Employee = require("./Employee");

class Manager extends Employee {
   constructor(name, email, officeNumber) {
      super(name, email)
      this.officeNumber = officeNumber;
   }

   getOfficeNum(){
      return this.officeNumber;
   }

   getRole(){
      return "Manager";
   }
}

module.exports = Manager;