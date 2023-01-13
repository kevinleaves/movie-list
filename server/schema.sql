-- drop db if exists db_name
DROP DATABASE IF EXISTS movielist;

-- create db
CREATE DATABASE movielist;

-- use db
USE movielist;

-- create table table_name
CREATE TABLE movies (
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  title VARCHAR(50) NOT NULL,
  watched BOOLEAN,
UNIQUE KEY uniq_title (title)
);
  -- id auto increment primary key
  -- title varchar 50
  -- watched boolean

