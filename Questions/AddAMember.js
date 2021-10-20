
firstMember();

const firstMember = () => {
    return inquirer.prompt(
    {
        type: "input",
        name: "mananger",
        message: "What is the name of your team manager?"
    })
};

const addAMember = () => {
    return inquirer.prompt([
    {
        type: "input",
        name: "teamMembers",
        message: "What is the name of one of your team members?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your team member's email address?"
    },
    {
        type: "input",
        name: "github",
        message: "What is your team member's github username?"
    },
    {
        type: "input",
        name: "number",
        message: "What is your team member's office number?"
    },
    {
        type: "input",
        name: "id",
        message: "What is your team member's employee ID?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your team member's email address?"
    }
])
anotherMember();
};

const anotherMember = () => {
    return inquirer.prompt(
    {
        type: "list",
        name: "another",
        message: "Would you like to add another team member?",
        choices: ["Yes", "No"]
    })
};


if (anotherMember().choices == "Yes") {

    return inquirer.prompt(
        {
            type: "input",
            name: "engineerIntern",
            message: "Are you entering an engineer or an intern?"
        });
        
    addAMember();
}