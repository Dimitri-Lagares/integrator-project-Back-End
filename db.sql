CREATE SCHEMA `integrator-project`;
use `integrator-project`;

CREATE TABLE `integrator-project`.`form` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL,
  `email` VARCHAR(50) NOT NULL,
  `phone` INT NOT NULL,
  `request` VARCHAR(500) NOT NULL,
  `comment` VARCHAR(5000) NOT NULL,
  PRIMARY KEY (`id`));

CREATE TABLE `integrator-project`.`auth` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(50) NOT NULL,
  `password` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id`));

+==========================================+

-- Database: db

-- DROP DATABASE IF EXISTS db;

CREATE DATABASE db
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'Spanish_Spain.1252'
    LC_CTYPE = 'Spanish_Spain.1252'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;
________________________________________________

-- SCHEMA: integrator-project

-- DROP SCHEMA IF EXISTS "integrator-project" ;

CREATE SCHEMA IF NOT EXISTS "integrator-project"
    AUTHORIZATION postgres;
________________________________________________

CREATE TABLE "integrator-project".form
(
    id BIGINT NOT NULL,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone BIGINT NOT NULL,
    request TEXT NOT NULL,
    comment TEXT NOT NULL,
    PRIMARY KEY (id)
);

ALTER TABLE IF EXISTS "integrator-project".form
    OWNER to postgres;

________________________________________________

CREATE TABLE "integrator-project".auth
(
    id serial NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    PRIMARY KEY (id)
);

ALTER TABLE IF EXISTS "integrator-project".auth
    OWNER to postgres;
________________________________________________
