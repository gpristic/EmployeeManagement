const mysql = require('mysql');
const inquirer = require('inquirer');
const db = require('./db');

const connection = mysql.createConnection({
  host: 'localhost',

  port: 3306,

  user: 'root',

  password: '',
  database: 'employees',
});

connection.connect((err) => {
  if (err) throw err;
  runSearch();
});

const runSearch = () => {
    inquirer
    .prompt({
        name: 'action',
        type: 'rawlist',
        message: 'What would you like to do?',
        choices: [
            'Add a department',
            'Add a role',
            'Add an employee',
            'View a department',
            'View a role',
            'View an employee',
            'Update an employee role'
        ],
    })
    .then((answer) => {
        switch (answer.action) {
            case 'Add a department':
                addDepartment();
                break;

                case 'Add a role':
                    addRole();
                    break;

                case 'Add an employee':
                    addEmployee();
                    break;
                    
                case 'View a department':
                    viewDepartment();
                    break;

                case 'View a role':
                    viewRole();
                    break;

                case 'View an employee':
                    viewEmployee();
                    break;

                case 'Update an employee role':
                    updateEmployee();
        }
    });
};

const addDepartment = () => {
    inquirer
    .prompt({
        name: 'add department',
        type: 'input',
        message: 'Add department here'
    })
    .then((answer) => {
        const query = 'INSERT INTO department SET ?';
        connection.query(query, {department: answer.department }, (err, res) => {
            console.log(`Added ${department} to departments`);
        });
        runSearch();
    });
};

const addRole = () => {
    inquirer
    .prompt({
        name: 'add role',
        type: 'input',
        message: 'Add role here'
    })
    .then((answer) => {
        const query = 'INSERT INTO role SET ?';
        connection.query(query, {role: answer.role }, (err, res) => {
            console.log(`Added ${role} to roles`);
        });
        runSearch();
    });
};

const addEmployee = () => {
    inquirer
    .prompt({
        name: 'add employee',
        type: 'input',
        message: 'Add employee here'
    })
    .then((answer) => {
        const query = 'INSERT INTO employee SET ?';
        connection.query(query, {employee: answer.employee }, (err, res) => {
            console.log(`Added ${employee} to employees`);
        });
        runSearch();
    });
};

const viewDepartment = () => {
    inquirer
    .prompt({
        name: 'department',
        type: 'input',
        message: 'What department would you like to search for?',
    })
    .then((answer) => {
        const query = 'SELECT name and id FROM employees WHERE ?';
        connection.query(query, { department: answer.department }, (err, res) => {
            res.forEach(({ id, name }) => {
                console.log(
                    `Id: ${id} || Name: ${name}`
                );
            });
            runSearch();
        });
    });
};

const viewRole = () => {
    inquirer
    .prompt({
        name: 'role',
        type: 'input',
        message: 'What role would you like to search for?',
    })
    .then((answer) => {
        const query = 'SELECT id, title, salary, department_id FROM employees WHERE ?';
        connection.query(query, { role: answer.role }, (err, res) => {
            res.forEach(({ id, title, salary, department_id }) => {
                console.log(
                    `Id: ${id} || Title: ${title} || Salary: ${salary} || ${department_id}`
                );
            });
            runSearch();
        });
    });
};

const viewEmployee = () => {
    inquirer
    .prompt({
        name: 'employee',
        type: 'input',
        message: 'What role would you like to search for?',
    })
    .then((answer) => {
        const query = 'SELECT id, first_name, last_name, role_id, managers_id FROM employees WHERE ?';
        connection.query(query, { role: answer.employee }, (err, res) => {
            res.forEach(({ id, first_name, last_name, role_id, managers_id }) => {
                console.log(
                    `Id: ${id} || Title: ${first_name} || Salary: ${last_name} || ${role_id} || ${managers_id}`
                );
            });
            runSearch();
        });
    });
};