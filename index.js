const inquirer = require('inquirer');
// const mysql = require('mysql');
// const consoleTable = require('console.table');
const connection = require('./db/connection')
const gradient = require('gradient-string');



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
    });

  }
