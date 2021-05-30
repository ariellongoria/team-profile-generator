const generateEmployeeCard = (employeeData) => {
    return employeeData
        .map((employee) => {
            switch (employee.getRole()) {
                case "Manager":
                    return `<div class="card container grey lighten-3">
<div class="card-content">
    <span><h3>${employee.getName()}</h3></span>
    <span><h4>${employee.getRole()}</h4></span>
    <ul class="collection">
        <li class="collection-item">ID: ${employee.getId()}</li>
        <a href="mailto:${employee.getEmail()}"><li class="collection-item">Email: ${employee.getEmail}</li>
        <li class="collection-item">Office Number: ${employee.getOffice()}</li>
    </ul>
</div>
</div>
`;
                case "Engineer":
                    return `<div class="card container grey lighten-3">
<div class="card-content">
    <span><h3>${employee.getName()}</h3></span>
    <span><h4>${employee.getRole()}</h4></span>
    <ul class="collection">
        <li class="collection-item">ID: ${employee.getId()}</li>
        <a href="mailto:${employee.getEmail()}"><li class="collection-item">Email: ${employee.getEmail}</li>
        <li class="collection-item">Github: ${employee.getGithub()}</li>
    </ul>
</div>
</div>
`;

                case "Intern":
                    return `<div class="card container grey lighten-3">
<div class="card-content">
    <span><h3>${employee.getName()}</h3></span>
    <span><h4>${employee.getRole()}</h4></span>
    <ul class="collection">
        <li class="collection-item">ID: ${employee.getId()}</li>
        <a href="mailto:${employee.getEmail()}"><li class="collection-item">Email: ${employee.getEmail}</li>
        <li class="collection-item">School: ${employee.getSchool}</li>
    </ul>
</div>
</div>
`;
            }
        })
        .join("");
};

const generateHTML = (employeeData) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />
            <title>Team Demo</title>
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
            />
    
            <link rel="stylesheet" href="style.css" />
        </head>
    
        <body class="teal lighten-4">
            <header class="teal accent-3">
                <h1 class="black-text">My Team</h1>
            </header>
            <main class="container">
                ${generateEmployeeCard(employeeData)}
            </main>
        </body>
    </html>
    `;
};