'use strict';

/** @type {import('sequelize-cli').Migration} */

// module.exports = {
//   up: async (queryInterface, Sequelize) => {
//     await queryInterface.addColumn('Users', 'createdAt', {
//       type: Sequelize.DATE,
//       allowNull: false,
//       defaultValue: Sequelize.fn('NOW'),
//     });
//     await queryInterface.addColumn('Users', 'updatedAt', {
//       type: Sequelize.DATE,
//       allowNull: false,
//       defaultValue: Sequelize.fn('NOW'),
//     });
//   },

//   down: async (queryInterface, Sequelize) => {
//     await queryInterface.removeColumn('Users', 'createdAt');
//     await queryInterface.removeColumn('Users', 'updatedAt');
//   }
// };
