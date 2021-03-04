//This file contains the template helper code for generating the employee profiles 

//Call dependencies
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

//Function to generate employee object based on role
function generateEmp (input) {
   
   const { employeeType } = input;

   if (employeeType === 'Manager') {
      let manager = generateManager(input);
      return manager;
   }
   else if (employeeType === 'Engineer') {
      let engineer = generateEngineer(input);
      return engineer;
   }
   else if (employeeType === 'Intern') {
      let intern = generateIntern(input);
      return intern;
   }

   //Template

}

//Function to generate employee object for a manager
function generateManager (input) {

   const { employeeName, emailAddress, mgrOfficeNum } = input; 
   const newMgr = new Manager(employeeName, emailAddress, mgrOfficeNum);
   
   return {
      name: newMgr.getName(),
      email: newMgr.getEmail(),
      role: newMgr.getRole(),
      empID: newMgr.getId(),
      officeNum: newMgr.getOfficeNum()
   };
}

//Function to generate employee object for an engineer
function generateEngineer (input) {

   const { employeeName, emailAddress, engGithub } = input; 
   const newEng = new Engineer(employeeName, emailAddress, engGithub);

   return {
      name: newEng.getName(),
      email: newEng.getEmail(),
      role: newEng.getRole(),
      empID: newEng.getId(),
      github: newEng.getGithub()
   };
}

//Function to generate employee object for an intern
function generateIntern (input) {

   const { employeeName, emailAddress, internSchool } = input; 
   const newIntern = new Intern(employeeName, emailAddress, internSchool);

   return {
      name: newIntern.getName(),
      email: newIntern.getEmail(),
      role: newIntern.getRole(),
      empID: newIntern.getId(),
      school: newIntern.getSchool()
   };
}

//Function to generate the full HTML contents
function generateHTML (input) {

   //Set empty strings for each employee type
   let managers = '';
   let engineers = '';
   let interns = '';

   //Loop through the passed-in array and fill employee type strings with each corresponding employee object
   for (let i = 0; i < input.length; i++) {
      if (input[i].role === 'Manager') {
         managers += `
         <div class="card has-background-info-dark has-text-left is-size-5 mb-4">
            <header class="card-header">
               <p class="card-header-title">
                  <span class="icon is-size-3 mr-4">
                     <i class="fas fa-user-tie"></i>
                  </span>
                  <span class="has-text-dark is-size-4">${input[i].name}</span>
               </p>
            </header>
            <div class="card-content">
               <div class="content">
                  <p><strong>Email:</strong> &nbsp; <span class="has-text-grey-light">${input[i].email}</span></p>
                  <p><strong>Office Number:</strong> &nbsp; <span class="has-text-grey-light">${input[i].officeNum}</span></p>
                  <p><strong>Employee ID:</strong> &nbsp; <span class="has-text-grey-light">${input[i].empID}</span></p>
               </div>
            </div>
         </div>
         `
      } else if (input[i].role === 'Engineer') {
         engineers += `
         <div class="card has-background-success-dark has-text-left is-size-5 mb-4">
            <header class="card-header">
               <p class="card-header-title">
                  <span class="icon is-size-3 mr-4">
                     <i class="fas fa-users-cog"></i>
                  </span>
                  <span class="has-text-dark is-size-4">${input[i].name}</span>
               </p>
            </header>
            <div class="card-content">
               <div class="content">
                  <p><strong>Email:</strong> &nbsp; <span class="has-text-grey-light">${input[i].email}</span></p>
                  <p><strong>Github:</strong> &nbsp; <span class="has-text-grey-light">${input[i].github}</span></p>
                  <p><strong>Employee ID:</strong> &nbsp; <span class="has-text-grey-light">${input[i].empID}</span></p>
               </div>
            </div>
         </div>
         `
      } else if (input[i].role === 'Intern') {
         interns += `
         <div class="card has-background-warning-dark has-text-left is-size-5 mb-4">
            <header class="card-header">
               <p class="card-header-title">
                  <span class="icon is-size-3 mr-4">
                     <i class="fas fa-id-badge"></i>
                  </span>
                  <span class="has-text-dark is-size-4">${input[i].name}</span>
               </p>
            </header>
            <div class="card-content">
               <div class="content">
                  <p><strong>Email:</strong> &nbsp; <span class="has-text-grey-light">${input[i].email}</span></p>
                  <p><strong>School:</strong> &nbsp; <span class="has-text-grey-light">${input[i].school}</span></p>
                  <p><strong>Employee ID:</strong> &nbsp; <span class="has-text-grey-light">${input[i].empID}</span></p>
               </div>
            </div>
         </div>
         `
      }
   }

   //Return the full formatted HTML content, passing in the employee type strings in the appropriate places
   return (`
   <!DOCTYPE html>
   <html class="has-background-grey-dark">
      <head>
         <meta charset="utf-8">
         <meta name="viewport" content="width=device-width, initial-scale=1">
         <title>Team Profiles</title>
         <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css">
      </head>
   
      <body>
         <nav class="navbar has-background-danger-dark is-justify-content-center mb-5">
            <div class="navbar-item is-size-1 has-text-dark">
               <span>My Team</span>
            </div>
         </nav>
         
         <div class="container is-fluid">
            <div class="tile is-ancestor mb-6">

               <!-- Manager column -->
               <div class="tile is-4 has-background-grey-dark is-vertical is-parent">
                  <div class="card has-background-grey-dark is-shadowless has-text-centered">
                     <div class="card has-background-grey-darker is-shadowless is-size-3 has-text-grey-light mb-4">
                        <div class="card-content">
                           <div class="content">
                              <p>Management</p>
                           </div>
                           ${managers}
                        </div>
                     </div>
                  </div>
               </div>
   
               <!-- Engineer column -->
               <div class="tile is-4 has-background-grey-dark is-vertical is-parent">
                  <div class="card has-background-grey-dark is-shadowless has-text-centered">
                     <div class="card has-background-grey-darker is-shadowless is-size-3 has-text-grey-light mb-4">
                        <div class="card-content">
                           <div class="content">
                              <p>Engineering</p>
                           </div>
                           ${engineers}
                        </div>
                     </div>
                  </div>
               </div>
   
               <!-- Intern column -->
               <div class="tile is-4 has-background-grey-dark is-vertical is-parent">
                  <div class="card has-background-grey-dark is-shadowless has-text-centered">
                     <div class="card has-background-grey-darker is-shadowless is-size-3 has-text-grey-light mb-4">
                        <div class="card-content">
                           <div class="content">
                              <p>Interns</p>
                           </div>
                           ${interns}
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <script defer src="https://use.fontawesome.com/releases/v5.14.0/js/all.js"></script>
      </body>
   </html>
   `)

}

module.exports = {generateEmp, generateHTML};