CREATE DATABASE library_data;

USE library_data;


CREATE TABLE students (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    fname text,
    lname text
    );


CREATE TABLE books(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name text NOT NULL,
    auth_name text NOT NULL
    );
    

CREATE TABLE borrowed(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    s_id INT NOT NULL,
    b_id INT NOT NULL,
    borrow_date DATE NOT NULL,
    expected_return_date DATE,
    returned int DEFAULT 0,
    FOREIGN KEY (s_id) REFERENCES students(id),
    FOREIGN KEY (b_id) REFERENCES books(id)
    );
