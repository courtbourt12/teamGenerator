// Packages needed for this application

const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const firstMember = (answers) => {
    return inquirer.prompt(
        {
            type: "input",
            name: "mananger",
            message: "What is the name of your team manager?"
        })
    };

    {
        type: "input",
        name: "engineer",
        message: "What is the name of the Engineer?"
    }
    
    {
        type: "input",
        name: "intern",
        message: "What is the name of the Intern?"
    }
    
const addAMember = () => {
    return inquirer.prompt([
    {
        type: "input",
        name: "email",
        message: "What is thier email address?"
    },
    {
        type: "input",
        name: "github",
        message: "What is their github username?"
    },
    {
        type: "input",
        name: "number",
        message: "What is their office number?"
    },
    {
        type: "input",
        name: "id",
        message: "What is their employee ID?"
    },
    {
        type: "input",
        name: "email",
        message: "What is their email address?"
    }
])
};

const anotherMember = () => {
    return inquirer.prompt(
    {
        type: "list",
        name: "another",
        message: "Would you like to...",
        choices: ["Add an engineer?", "Add an intern?", "Finish building your team?"]
    })
};



if (anotherMember(answers.another) == "Yes") {

    return inquirer.prompt(
        {
            type: "input",
            name: "engineerIntern",
            message: "Are you entering an engineer or an intern?"
        });
    };

const addMember = require("./Questions/AddAMember");
const writeHTML = util.promisify(fs.writeFile);

const init = () => {
    firstMember()
    .then((answers) => writeHTML("script.HTML", addMember(answers)))
    .catch((err) => console.log(err));
};

init();
        
    
