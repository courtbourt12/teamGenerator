// Packages needed for this application

const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const theManager = [];
const theEngineers = [];
const theInterns = [];

const firstMember = () => {
    return inquirer
    .prompt([
        {
            type: "input",
            name: "mananger",
            message: "What is the name of your team manager?"
        },
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
            type: "list",
            name: "another",
            message: "Would you like to...",
            choices: ["Add an engineer?", "Add an intern?", "Finish building your team?"]
        }
])
.then((answers) => {
    theManager.push('Managers:', answers)
    console.log(theManager);
    if ((answers.another) === "Add an engineer?") {
        engineer()
    } else if ((answers.another) === "Add an intern?") {
        intern()
    // } else if ((answers.another) === "Finish building your team?") {
    //     writeIt()
    }
})
}

const engineer = () => {
    return inquirer
    .prompt([
        {
            type: "input",
            name: "engineer",
            message: "What is the name of the Engineer?"
        },
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
            type: "list",
            name: "another",
            message: "Would you like to...",
            choices: ["Add an engineer?", "Add an intern?", "Finish building your team?"]
        }
])
.then((answers) => {
    theEngineers.push('Engineers:', answers)
    console.log(theEngineers);
    if ((answers.another) === "Add an engineer?") {
        engineer()
    } else if ((answers.another) === "Add an intern?") {
        intern()
    // } else if ((answers.another) === "Finish building your team?") {
    //     writeIt()
    // }
}})
// .then((answers) => writeHTML("script.HTML", addMember(answers)))
}

const intern = () => {
    return inquirer
    .prompt([
        {
            type: "input",
            name: "intern",
            message: "What is the name of the Intern?"
        },
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
            type: "list",
            name: "another",
            message: "Would you like to...",
            choices: ["Add an engineer?", "Add an intern?", "Finish building your team?"]
        }
])
.then((answers) => {
    theInterns.push('Interns:', answers)
    console.log(theInterns);
    if ((answers.another) === "Add an engineer?") {
        engineer()
    } else if ((answers.another) === "Add an intern?") {
        intern()
    // } else if ((answers.another) === "Finish building your team?") {
    //     writeIt()
    // }
}})
// .then((answers) => writeHTML("script.HTML", addMember(answers)))
}


const addMember = require("./Questions/AddAMember");
const writeHTML = util.promisify(fs.writeFile);

const init = () => {
    firstMember()

}
 init();



// const writeIt = () => {
// writeHTML("script.HTML", addMember(answers))
// };

