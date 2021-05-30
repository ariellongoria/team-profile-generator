const inquirer = require("inquirer");

const promptManager = () => {
    const employeeData = [];

    return inquirer
        .prompt([
            {
                type: "input",
                name: "manager-name",
                message: "What is the name of the manager?",
            },
            {
                type: "input",
                name: "manager-id",
                message: "What is the manager's employee ID?",
            },
            {
                type: "input",
                name: "manager-email",
                message: "What is the manager's E-Mail?",
            },
            {
                type: "input",
                name: "manager-office",
                message: "What is the manager's office number?",
            },
            {
                type: "list",
                name: "addEmployee",
                message: "Would you like to add a new employee or finish your team?",
                choices: ["Engineer", "Intern", "Finish"],
            },
        ])
        .then((manager) => {
            employeeData.push(manager);
            switch (manager.addEmployee) {
                case "Engineer":
                    return promptEngineer(employeeData);
                case "Intern":
                    return promptIntern(employeeData);
                case "Finish":
                    return employeeData;
            }
        });
};

const promptEngineer = (employeeData) => {
    if (!employeeData) {
        employeeData = [];
    }

    return inquirer
        .prompt([
            {
                type: "input",
                name: "engineer-name",
                message: "What is the name of the engineer?",
            },
            {
                type: "input",
                name: "engineer-id",
                message: "What is the engineer's employee ID?",
            },
            {
                type: "input",
                name: "engineer-email",
                message: "What is the engineer's E-Mail?",
            },
            {
                type: "input",
                name: "engineer-github",
                message: "What is the engineer's GitHub username?",
            },
            {
                type: "list",
                name: "addEmployee",
                message: "Would you like to add a new employee or finish your team?",
                choices: ["Engineer", "Intern", "Finish"],
            },
        ])
        .then((engineer) => {
            employeeData.push(engineer);
            switch (engineer.addEmployee) {
                case "Engineer":
                    return promptEngineer(employeeData);
                case "Intern":
                    return promptIntern(employeeData);
                case "Finish":
                    return employeeData;
            }
        });
};

const promptIntern = (employeeData) => {
    if (!employeeData) {
        employeeData = [];
    }

    return inquirer
        .prompt([
            {
                type: "input",
                name: "intern-name",
                message: "What is the name of the intern?",
            },
            {
                type: "input",
                name: "intern-id",
                message: "What is the intern's employee ID?",
            },
            {
                type: "input",
                name: "intern-email",
                message: "What is the intern's E-Mail?",
            },
            {
                type: "input",
                name: "intern-school",
                message: "What is the intern's school?",
            },
            {
                type: "list",
                name: "addEmployee",
                message: "Would you like to add a new employee or finish your team?",
                choices: ["Engineer", "Intern", "Finish"],
            },
        ])
        .then((intern) => {
            employeeData.push(intern);
            switch (intern.addEmployee) {
                case "Engineer":
                    return promptEngineer(employeeData);
                case "Intern":
                    return promptIntern(employeeData);
                case "Finish":
                    return employeeData;
            }
        });
};

promptManager().then((employeeData) => console.log(employeeData));

// GIVEN a command-line application that accepts user input

// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input

// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address

// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab

// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number

// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team

// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu

// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu

// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated
