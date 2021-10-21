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

const anotherEngineer = () => {
    return inquirer.prompt(
    {
        type: "input",
        name: "engineer",
        message: "What is the name of the Engineer?"}
    )};

const anotherIntern = () => {
    return inquirer.prompt(
    {
        type: "input",
        name: "intern",
        message: "What is the name of the Intern?"
    })
};
    
const addAMember = () => {
    return inquirer.prompt([
    {
        type: "input",
        name: "email",
        message: "What is their email address?"
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

const whatNext = () => {
    if (anotherMember(answers.another)==="Add an engineer?") {
        anotherEngineer()
    } else if (anotherMember(answers.another)==="Add an intern?") {
        anotherIntern()
    } else if (anotherMember(answers.another)==="Finish building your team?") {
        writeIt()
}
}



const addMember = require("./Questions/AddAMember");
const writeHTML = util.promisify(fs.writeFile);

const init = () => {
    firstMember()
    .then(addAMember())
    .then(anotherMember())
    .then(whatNext())

};

init();

const writeIt = () => {
writeHTML("script.HTML", addMember(answers))
};
