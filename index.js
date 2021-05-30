const inquirer = require("inquirer");
const { writeFile, copyFile } = require("./utils/generate-site");
const generateSite = require("./src/generate-html");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const promptManager = () => {
    const employeeData = [];

    return inquirer
        .prompt([
            {
                type: "input",
                name: "managerName",
                message: "What is the name of the manager?",
            },
            {
                type: "input",
                name: "managerId",
                message: "What is the manager's employee ID?",
            },
            {
                type: "input",
                name: "managerEmail",
                message: "What is the manager's E-Mail?",
            },
            {
                type: "input",
                name: "managerOffice",
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
            employeeData.push(
                new Manager(manager.managerName, manager.managerId, manager.managerEmail, manager.managerOffice)
            );
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
                name: "engineerName",
                message: "What is the name of the engineer?",
            },
            {
                type: "input",
                name: "engineerId",
                message: "What is the engineer's employee ID?",
            },
            {
                type: "input",
                name: "engineerEmail",
                message: "What is the engineer's E-Mail?",
            },
            {
                type: "input",
                name: "engineerGithub",
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
            employeeData.push(
                new Engineer(
                    engineer.engineerName,
                    engineer.engineerId,
                    engineer.engineerEmail,
                    engineer.engineerGithub
                )
            );
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
                name: "internName",
                message: "What is the name of the intern?",
            },
            {
                type: "input",
                name: "internId",
                message: "What is the intern's employee ID?",
            },
            {
                type: "input",
                name: "internEmail",
                message: "What is the intern's E-Mail?",
            },
            {
                type: "input",
                name: "internSchool",
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
            employeeData.push(new Intern(intern.internName, intern.internId, intern.internEmail, intern.internSchool));
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

promptManager()
    .then((employeeData) => generateSite(employeeData))
    .then((pageHtml) => writeFile(pageHtml))
    .then(() => copyFile());

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
