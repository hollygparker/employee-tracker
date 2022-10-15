const inquirer = require('inquirer');
// const mysql = require('mysql');
// const consoleTable = require('console.table');
const connection = require('./db/connection')
const gradient = require('gradient-string');
const { allowedNodeEnvironmentFlags } = require('process');



console.log(
    gradient.summer(`
  ,------------------------------------------------------.
  |                                                     |
  |     _____                 _                         |
  |    | ____|_ __ ___  _ __ | | ___  _   _  ___  ___   |
  |    |  _| | '_ \` _ \\| '_ \\| |/ _ \\| | | |/ _ \\/ _ \\  |
  |    | |___| | | | | | |_) | | (_) | |_| |  __/  __/  |
  |    |_____|_| |_| |_| .__/|_|\\___/ \\__, |\\___|\\___|  |
  |                    |_|            |___/             |
  |                                                     |
  |     __  __                                          |
  |    |  \\/  | __ _ _ __   __ _  __ _  ___ _ __        |
  |    | |\\/| |/ _\` | '_ \\ / _\` |/ _\` |\/ _ \\ '__|       |
  |    | |  | | (_| | | | | (_| | (_| |  __/ |          |
  |    |_|  |_|\\__,_|_| |_|\\__,_|\\__, |\\___|_|          |
  |                              |___/                  |
  |                                                     |
  \`-----------------------------------------------------'
  `)
  );

  connection.connect(function (err) {
    if (err) { console.log(err) }
    showEmployees()
  });

  function showEmployees() {
    inquirer.prompt({
        type: 'list',
        name: 'mainMenu',
        message: 'Where would you like to begin?',
        choices: ['View all departments', 'View all roles', 'View all employees', 'Add department', 'Add role', 'Add new employee', 'Update an existing employee role']
    })
        .then((response) => {
            if (response.mainMenu === 'View all departments') {
                allDepartments();
            } else if (response.mainMenu === 'View all roles') {
                allRoles();
            } else if (response.mainMenu === 'View all employees') {
                allEmployees();
            } else if (response.mainMenu === 'Add department') {
                addDepartment();
            } else if (response.mainMenu === 'Add role') {
                addRole();
            } else if (response.mainMenu === 'Add new employee') {
                addEmployee();
            } else if (response.mainMenu === 'Update an existing employee role') {
                allRoles();
            } 
        })

function allDepartments() {
    connection.query('SELECT * FROM department;', 
        function (err, result) {
            if (err) { console.log(err) }
            console.table(result)
            showEmployees();
        })
  };

  function allRoles() {
    connection.query('SELECT * FROM role;', 
        function (err, result) {
            if (err) { console.log(err) }
            console.table(result)
            showEmployees();
        })
    };

  function allEmployees() {
    connection.query('SELECT * FROM employee;', 
        function (err, result) {
            if (err) { console.log(err) }
            console.table(result)
            showEmployees();
        })
    };

    function addDepartment() {
        inquirer.prompt({
            type: 'input',
            name: 'addDepartment',
            message: 'Please enter department name:',
        })
            .then((response) => {
                connection.query('INSERT INTO department SET ?;',
                {
                    name: response.addDepartment,
                },
                function (err, result) {
                    if (err) { console.log(err) }
                    console.table(result)
                    showEmployees();
                })
            })
        
    };

    function addRole() {
        var roleQuestions = [
            {
                type: 'input',
                name: 'nameRole',
                message: 'Please enter the name of the role.'
            },
            {
                type: 'input',
                name: 'salaryRole',
                message: 'Please enter the salary of the role.'
            },
            {
                type: 'input',
                name: 'departmentRole',
                message: 'Please enter the department this role belongs to.'
            },
        ]

        inquirer.prompt(roleQuestions)
        .then((response) => {
            connection.query('INSERT INTO role SET ?;',
            {
                title: response.nameRole,
                salary: response.salaryRole,
                department_id: response.departmentRole
            },
            function (err, result) {
                if (err) { console.log(err) }
                console.table(result)
                showEmployees();
            })
        })
    };

    function addEmployee() {
        var employeeQuestions = [
            {
                type: 'input',
                name: 'firstName',
                message: 'Please enter first name of employee.'
            },
            {
                type: 'input',
                name: 'lastName',
                message: 'Please enter last name of employee.'
            },
            {
                type: 'input',
                name: 'employeeRole',
                message: 'Please enter the role ID.'
            },
            {
                type: 'input',
                name: 'employeeManager',
                message: 'Please enter the manager ID.'
            },
        ]

        inquirer.prompt(employeeQuestions)
        .then((response) => {
            connection.query('INSERT INTO employee SET ?;',
            {
                first_name: response.firstName,
                last_name: response.lastName,
                role_id: response.employeeRole,
                manager_id: response.employeeManager
            },
            function (err, result) {
                if (err) { console.log(err) }
                console.table(result)
                showEmployees();
            })
        })
    };

    

  }
