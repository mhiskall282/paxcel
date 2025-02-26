"use strict";

const { NOW } = require("sequelize");
const DataTypes = require("sequelize/lib/data-types");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable("Shipments", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
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
            // schema: "public",
          },
          key: "id",
        },
      },

      receiverName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      from_location: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      to_location: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      deliveryType: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "air",
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
