'use strict';

const { NOW } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable("Users",
      {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique:true,
        autoIncrement:true,
        primaryKey:true,
      },
       name: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true,
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true,
        },
        password: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        role:{
          type: Sequelize.STRING,
          allowNull: false,
          defaultValue: "user",
        },
        createAt:{
          type:Sequelize.DATE(NOW)
        },
        updatedAt:{
          type:Sequelize.DATE(NOW)
        }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};
