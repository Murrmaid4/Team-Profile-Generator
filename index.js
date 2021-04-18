const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");


// we want to create a function that starts the app 

menu = () => {
    newEmployee = () => {





        
    }
    createManager = () => {
        inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "Please enter manager's name"
                //input validation here for each question check npm documentation
            },
            {
                type: "input",
                name: "id",
                message: "Enter manager's id"
            },
            {
                type: "input",
                name: "email",
                message: "What is the team manager's email?"
            },
            {
                type: "input",
                name: "officeNumber",
                message: "Enter manager's office number"
            },

        ]).then(({name, id, email, officeNumber}) => {
            const manager = new Manager(name, id, email, officeNumber)
            console.log(manager)


        })
    }
    createManager();
    //create the next set of prompts for engineer and intern below as well as write the file 
}

//we use inquirer here to build the questions and write the file - write file statement needs to send data to that src folder 
menu();


//src file will hold the template for HTML, can prebuild in html and link external css. get functionality working then work on what it looks like 