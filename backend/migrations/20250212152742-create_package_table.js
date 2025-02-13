"use strict";

const { NOW } = require("sequelize/lib/data-types");
const DataTypes = require("sequelize/lib/data-types");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Packages", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique:true,
        autoIncrement:true,
        primaryKey:true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      weight: {
        type: DataTypes.DECIMAL,
        allowNull: true,
      },
      item_type: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      dimension: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: "Dimension of Item",
      },
      createdAt: {
        type: Sequelize.DATE(NOW),
      },
      updatedAt: {
        type: Sequelize.DATE(NOW),
      },
    });
  },

  async down(queryInterface, Sequelize) {
     await queryInterface.dropTable('Packages');
  },
};
