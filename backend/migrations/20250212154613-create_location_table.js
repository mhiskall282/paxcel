"use strict";

const { NOW } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Locations", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique:true,
        autoIncrement:true,
        primaryKey:true,
      },
      long: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      lat: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "unknown",
      },
      shipment_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName:"Shipments",
            schema:"public",
          },
          key: "id",
        },
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
    await queryInterface.dropTable('Locations');
  },
};
