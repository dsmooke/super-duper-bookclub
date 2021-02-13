DROP DATABASE IF EXISTS bookshelf_db;

CREATE DATABASE bookshelf_db;

USE bookshelf_db;

CREATE TABLE bookshelf (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(50) NOT NULL,
    author VARCHAR(30) NOT NULL,
    genre VARCHAR(30),
    PRIMARY KEY (id)
);
