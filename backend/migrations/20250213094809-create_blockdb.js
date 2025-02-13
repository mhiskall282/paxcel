"use strict";

const { NOW } = require("sequelize");
const DataTypes = require("sequelize/lib/data-types");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Blockchains", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      blockNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        unique:true,
      },
      trackingNumber: {
        type: Sequelize.UUID,
        allowNull: false,
        unique:true,
      },
      transactionHash: {
        type: Sequelize.STRING,
        allowNull: false,
        unique:true,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.DATE(NOW),
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.DATE(NOW),
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Blockchains");
  },
};
