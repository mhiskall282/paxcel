"use strict";

import bcrypt from 'bcryptjs';

/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
  await queryInterface.bulkInsert(
    "Users",
    [
      {
        name: "admin",
        email: "admin@mail.com",
        address: "admin",
        phone: "0209117002",
        password: await bcrypt.hash("admin1234",10),
        role: "admin",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "user",
        email: "user@mail.com",
        address: "user",
        phone: "0209117002",
        password: await bcrypt.hash("user1234",10),
        role: "user",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "clear",
        email: "clear@mail.com",
        address: "clear",
        phone: "0209117002",
        password: await bcrypt.hash("clear1234",10),
        role: "clear",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'agent',
        email: "agent@mail.com",
        address: "agent",
        phone: "0209117002",
        password: await bcrypt.hash("agent1234",10),
        role: "agent",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]
  );
}
export async function down(queryInterface, Sequelize) {
  await queryInterface.bulkDelete("Users", null, {});
}
