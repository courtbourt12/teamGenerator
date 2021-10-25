// Packages needed for this application

const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const theEmployees = [];

class theManager {
    constructor (name, email, github, number, id) {
        this.name = name;
        this.email = email;
        this.github = github;
        this.number = number;
        this.id = id;
    }
}

class theEngineers {
    constructor (name, email, github, number, id) {
        this.name = name;
        this.email = email;
        this.github = github;
        this.number = number;
        this.id = id;
    }
}

class theInterns {
    constructor (name, email, github, number, id) {
        this.name = name;
        this.email = email;
        this.github = github;
        this.number = number;
        this.id = id;
    }
}

const firstMember = () => {
    return inquirer
    .prompt([
        {
            type: "input",
            name: "myManager",
            message: "What is the name of your team manager?"
        },
        {
            type: "input",
            name: "Memail",
            message: "What is their email address?"
        },
        {
            type: "input",
            name: "Mgithub",
            message: "What is their github username?"
        },
        {
            type: "input",
            name: "Mnumber",
            message: "What is their office number?"
        },
        {
            type: "input",
            name: "Mid",
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
    const {myManager, Memail, Mgithub, Mnumber, Mid} = answers;
    const theManagerCard = new theManager (myManager, Memail, Mgithub, Mnumber, Mid);
    theEmployees.push(theManagerCard);
    if ((answers.another) === "Add an engineer?") {
        engineer()
    } else if ((answers.another) === "Add an intern?") {
        intern()
    } else if ((answers.another) === "Finish building your team?") {
        writeIt()
    }
})
}

const engineer = () => {
    return inquirer
    .prompt([
        {
            type: "input",
            name: "engineering",
            message: "What is the name of the Engineer?"
        },
        {
            type: "input",
            name: "Eemail",
            message: "What is their email address?"
        },
        {
            type: "input",
            name: "Egithub",
            message: "What is their github username?"
        },
        {
            type: "input",
            name: "Enumber",
            message: "What is their office number?"
        },
        {
            type: "input",
            name: "Eid",
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
    const {engineering, Eemail, Egithub, Enumber, Eid} = answers;
    const myEngineer = new theEngineers (engineering, Eemail, Egithub, Enumber, Eid);
    theEmployees.push(myEngineer);
    if ((answers.another) === "Add an engineer?") {
        engineer()
    } else if ((answers.another) === "Add an intern?") {
        intern()
    } else if ((answers.another) === "Finish building your team?") {
        writeIt()
    }
})
}

const intern = () => {
    return inquirer
    .prompt([
        {
            type: "input",
            name: "interning",
            message: "What is the name of the Intern?"
        },
        {
            type: "input",
            name: "Iemail",
            message: "What is their email address?"
        },
        {
            type: "input",
            name: "Igithub",
            message: "What is their github username?"
        },
        {
            type: "input",
            name: "Inumber",
            message: "What is their office number?"
        },
        {
            type: "input",
            name: "Iid",
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
    const {interning, IImail, Igithub, Inumber, Iid} = answers;
    const myIntern = new theIntern (interning, IImail, Igithub, Inumber, Iid);
    theEmployees.push(myIntern);
    if ((answers.another) === "Add an engineer?") {
        engineer()
    } else if ((answers.another) === "Add an intern?") {
        intern()
    } else if ((answers.another) === "Finish building your team?") {
        writeIt()
    }
})
}


const addMember = require("./Questions/AddAMember");
const writeHTML = util.promisify(fs.writeFile);

const init = () => {
    firstMember()

}
 init();



const writeIt = () => {
writeHTML("script.HTML", addMember())
};

