'use strict';

const Sequelize = require('sequelize');
const db = require('../db');

const Student = db.define('student', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  }
});

Student.beforeCreate((newStudent) => {
  newStudent.firstName = newStudent.firstName.slice(0, 1).toUpperCase() + newStudent.firstName.slice(1);
  newStudent.lastName = newStudent.lastName.slice(0, 1).toUpperCase() + newStudent.lastName.slice(1);
});

module.exports = Student;
