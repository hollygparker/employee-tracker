INSERT INTO department (name)
VALUES ("Engineering"), ("Finance"), ("Sales"), ("Legal");

INSERT INTO role (title, salary, department_id)
VALUES ("Lead Engineer", 150000, 1);

INSERT INTO role (title, salary, department_id)
VALUES ("Software Engineer", 120000, 1);

INSERT INTO role (title, salary, department_id)
VALUES ("Accountant", 80000, 2);

INSERT INTO role (title, salary, department_id)
VALUES ("Account Manager", 120000, 2);

INSERT INTO role (title, salary, department_id)
VALUES ("Salesperson", 80000, 3);

INSERT INTO role (title, salary, department_id)
VALUES ("Sales Director", 120000, 3);

INSERT INTO role (title, salary, department_id)
VALUES ("Legal Team Lead", 250000, 4);

INSERT INTO role (title, salary, department_id)
VALUES ("Lawyer", 190000, 4)

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Sally", "Parker", 1, NULL);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Kelly", "Jones", 2, NULL);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Jess", "Smith", 3, NULL);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Emily", "Jacobs", 4, NULL);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Caitlin", "Everett", 5, NULL);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Miranda", "Graham", 6, NULL);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Catherine", "Michaels", 7, NULL);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Veronica", "Brown", 8, NULL);

UPDATE employee SET manager_id = 1 WHERE id = 1;