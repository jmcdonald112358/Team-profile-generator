//Call dependencies
const inquirer = require('inquirer');
const { generateHTML, generateEmp } = require('./src/profiler');
const fs = require("fs");

//Prompts for getting an employee's information
const questions = [
   
   //Employee name
   {
      type: 'input',
      name: 'employeeName',
      message: 'Enter employee name: ',
   },
   
   //Employee email address
   {
      type: 'input',
      name: 'emailAddress',
      message: 'Enter employee email address: '
   },
   
   //Employee type
   {
      type: 'list',
      name: 'employeeType',
      message: 'Select employee type: ',
      choices: ['Manager', 'Engineer', 'Intern']
      // filter: function(val) {
      //    return val.toLowerCase();
      // }
   },

   //If manager, get office number
   {
      type: 'input',
      name: 'mgrOfficeNum',
      message: 'What is their office number?',
      when: input => {return input.employeeType === 'Manager'},
      validate: value => {
         let valid = !isNaN(parseFloat(value));
         return valid || 'Please enter a number';
      }
   },

   //If engineer, get Github
   {
      type: 'input',
      name: 'engGithub',
      message: 'What is their GitHub username?',
      when: input => {return input.employeeType === 'Engineer'}
   },

   //If intern, get school
   {
      type: 'input',
      name: 'internSchool',
      message: 'What school did they go to?',
      when: input => {return input.employeeType === 'Intern'}
   },

   //Add another?
   {
      type: 'confirm',
      name: 'addAnother',
      message: 'Do you have another employee to add?'
   }

]

//Empty array to store employee objects as they're created
const employees = [];

//Function to initialize program
async function init() {

   //Initiate prompts for employee info
   const input = await inquirer.prompt(questions);
   
   //Generate employee object from response and push into employees array
   let newEmp = generateEmp(input);
   employees.push(newEmp);

   //Prompt to add another employee and restart function if yes
   if (input.addAnother) {
      init();

   } else {

      //Write index.html file by passing the employees array into the generateHTML function
      fs.writeFile("./dist/index.html", generateHTML(employees), err => err && console.error(err));
      console.log(`
   --------------------------------------------
   | Team Profile page generated successfully! |
   --------------------------------------------`)
   }

}

//Function call to initialize program
init();