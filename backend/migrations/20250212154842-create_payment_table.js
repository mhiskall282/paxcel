"use strict";

const { NOW } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Create schema if not exists
    await queryInterface.createTable("Payments", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey:true,
        autoIncrement: true,
      },
      transaction_id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        unique: true,
        allowNull: false,
      },
      shipment_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: "Shipments",
            // schema: 'public',
          },
          key: "id",
        },
        unique: true,
      },
      owner_id: {
        type: Sequelize.INTEGER,
        comment: "Foreign of user",
        references: {
          model: {
            tableName: "Users",
            // schema:"public",
          },
          key: "id",
        },
      },
      package_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "Packages",
            // schema:"public",
          },
          key: "id",
        },
      },
      paymentMethod: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cryptoType: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: "ETH",
      },
      cardNumber: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      cvc: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      expiryDate: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "pending",
      },
      amount: {
        type: Sequelize.DECIMAL,
        allowNull: false,
        defaultValue: 0.0,
      },
      balance: {
        type: Sequelize.DECIMAL,
        allowNull: false,
        defaultValue: 0.0,
      },
      credit: {
        type: Sequelize.DECIMAL,
        allowNull: false,
        defaultValue: 0.0,
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
    return queryInterface.dropTable("Payments");
  },
};
