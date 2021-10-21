// Packages needed for this application

const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

class Questions {

firstMember() {
    inquirer
    .prompt(
        {
            type: "input",
            name: "mananger",
            message: "What is the name of your team manager?"
        });
    then.addAMember();
}

anotherEngineer() {
    inquirer
    .prompt(
    {
        type: "input",
        name: "engineer",
        message: "What is the name of the Engineer?"}
    )};

anotherIntern() {
    inquirer
    .prompt(
    {
        type: "input",
        name: "intern",
        message: "What is the name of the Intern?"
    })
};
    
addAMember() {
    inquirer
    .prompt([
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
then.anotherMember();
};

anotherMember() {
    inquirer
    .prompt(
    {
        type: "list",
        name: "another",
        message: "Would you like to...",
        choices: ["Add an engineer?", "Add an intern?", "Finish building your team?"]
    })
    then.whatNext();
};

whatNext() {
    if (anotherMember(answers.another)==="Add an engineer?") {
        then.anotherEngineer()
    } else if (anotherMember(answers.another)==="Add an intern?") {
        then.anotherIntern()
    } else if (anotherMember(answers.another)==="Finish building your team?") {
        then.writeIt()
}
}
}



const addMember = require("./Questions/AddAMember");
const writeHTML = util.promisify(fs.writeFile);

const init = () => {
    const questions = new Questions()
    questions.firstMember()
    

}
 init();



const writeIt = () => {
writeHTML("script.HTML", addMember(answers))
};

