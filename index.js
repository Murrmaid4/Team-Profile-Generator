const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const htmlTemp = require("./src/htmlTemp");
const fs = require("fs");
const crew = [];


// we want to create a function that starts the app 
//when the app starts we want it to ask if the user would like to add an employee, each option having their own set of questions. 

menu = () => { 
    
inquirer.prompt(
    {
    message: "Add an Employee?",
    name: "action",
    type: "list",
    choices: ["Manager", "Engineer", "Intern", "No New Employees"]
    }
)
//this switch statement will tell it what function to run based on the user's response
.then((response) => {
    switch (response.action) {
        case "Manager":
            newManager();
            break;
        case "Engineer":
            newEngineer();
            break;
        case "Intern":
            newIntern();
            break;
        case "No New Employees":
            createTeamFile();
            break;
    }
});
};
//these each create the questions that are displayed based on that choice
newManager = () => {
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
                //this promise then pulls the data from the responses
                const emp = new Manager(name, id, email, officeNumber)
                //and using the corresponding classes sheet an object is created from said data. 
                crew.push(emp)
                menu();
                //this brings them back to the first set of questions, so they can add another employee or just write the file. 
            })

        }
        
    
     newEngineer = () => {
        inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "Please enter Engineer's name"
                //input validation here for each question check npm documentation
            },
            {
                type: "input",
                name: "id",
                message: "Enter employee id"
            },
            {
                type: "input",
                name: "email",
                message: "What is the engineer's email?"
            },
            {
                type: "input",
                name: "Github",
                message: "Enter Engineer's Github Username"
            },
           

        ]).then(({name, id, email, Github}) => {
            const emp = new Engineer(name, id, email, Github)
            crew.push(emp)
            menu();

        })
    }
    newIntern = () => {
        inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "Please enter Intern's name"
                //input validation here for each question check npm documentation
            },
            {
                type: "input",
                name: "id",
                message: "Enter employee id"
            },
            {
                type: "input",
                name: "email",
                message: "What is the Intern's email?"
            },
            {
                type: "input",
                name: "school",
                message: "Enter Intern's school."
            },
           

        ]).then(({name, id, email, school}) => {
            const emp = new Intern(name, id, email, school)
            crew.push(emp)
            menu();

        })
    }
    

    createTeamFile = () => {

        const htmlFile = htmlTemp(crew);
        fs.writeFileSync("./dist/index.html", htmlFile)
        console.log("Your team has been generated - check the dist folder!")
    }

menu();


//src file will hold the template for HTML, can prebuild in html and link external css. get functionality working then work on what it looks like 