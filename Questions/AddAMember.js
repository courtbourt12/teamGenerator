const generateHTML = () => {
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
        <h2>${theManager.name}</h2>
        <ul>
            <li>Email: ${theManager.email}</li>
            <li>GitHub: ${theManager.github}</li>
            <li>Office Number: ${theManager.number}</li>
            <li>Employee ID: ${theManager.id}</li>
        </ul>
    </section>

    <section class = "engineer"> 
        <h1>Engineer</h1>
        <h2>${theEngineers.manager}</h2>
        <ul>
            <li>Email: ${theEngineers.email}</li>
            <li>GitHub: ${theEngineers.github}</li>
            <li>Office Number: ${theEngineers.number}</li>
            <li>Employee ID: ${theEngineers.id}</li>
        </ul>
    </section>

    <section class = "intern"> 
        <h1>Intern</h1>
        <h2>${theInterns.manager}</h2>
        <ul>
            <li>Email: ${theInterns.email}</li>
            <li>GitHub: ${theInterns.github}</li>
            <li>Office Number: ${theInterns.number}</li>
            <li>Employee ID: ${theInterns.id}</li>
        </ul>
    </section>
</body>`
}

module.exports = generateHTML;

