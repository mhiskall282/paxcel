"use strict";

const { NOW } = require("sequelize/lib/data-types");
const Sequelize = require("sequelize/lib/data-types");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Receivers", {
      id: {
        type: Sequelize.INTEGER,
        unique:true,
        allowNull: false,
        autoIncrement:true,
        primaryKey:true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          max: 25,
        },
      },
      address: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          max: 15,
        },
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createAt:{
          type:Sequelize.DATE(NOW)
        },
        updatedAt:{
          type:Sequelize.DATE(NOW)
        }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Receivers');
  },
};
