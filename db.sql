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