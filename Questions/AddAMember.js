const generateHTML = (answers) => {
`<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CSS Snippet Cheatsheet</title>
  <link rel="stylesheet" href="assets/css/reset.css" />
  <link rel="stylesheet" href="./assets/css/style.css" />
</head>

<body>
    <section class = "teamLeader"> 
        <h1>Team Manager</h1>
        <h2>${firstMember(answers.manager)}</h2>
        <ul>
            <li>Email: ${firstMember(answers.email)}</li>
            <li>GitHub: ${firstMember(answers.github)}</li>
            <li>Office Number: ${firstMember(answers.number)}</li>
            <li>Employee ID: ${firstMember(answers.id)}</li>
        </ul>
    </section>

    <section class = "engineer"> 
        <h1>Engineer</h1>
        <h2>${engineer(answers.manager)}</h2>
        <ul>
            <li>Email: ${engineer(answers.email)}</li>
            <li>GitHub: ${engineer(answers.github)}</li>
            <li>Office Number: ${engineer(answers.number)}</li>
            <li>Employee ID: ${engineer(answers.id)}</li>
        </ul>
    </section>

    <section class = "intern"> 
        <h1>Intern</h1>
        <h2>${intern(answers.manager)}</h2>
        <ul>
            <li>Email: ${intern(answers.email)}</li>
            <li>GitHub: ${intern(answers.github)}</li>
            <li>Office Number: ${intern(answers.number)}</li>
            <li>Employee ID: ${intern(answers.id)}</li>
        </ul>
    </section>
</body>`
}

module.exports = generateHTML;

