"use strict";

const { NOW } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable("Shipments", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique:true,
        autoIncrement: true,
        primaryKey:true,
      },
      trackingNumber: {
        type: Sequelize.UUID,
        allowNull: false,
        defaultValue: Sequelize.UUIDV1,
        unique: true,
      },
      sender: {
        type: Sequelize.INTEGER,
        allowNull: false,
        comment: "Foreign for Sender/user",
        references: {
          model: {
            tableName: "Users",
            schema: "public",
          },
          key: "id",
        },
      },

      receiver: {
        type: Sequelize.INTEGER,
        allowNull: false,
        comment: "Foreign for Receiver",
        references: {
          model: {
            tableName: "Receivers",
            schema: "public",
          },
          key: "id",
        },
      },
      from_location: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      to_location: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      status: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "created",
      },
      estimatedDelivery: {
        type: Sequelize.DATE,
        allowNull: false,
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
    await queryInterface.dropTable("Shipments");
  },
};
