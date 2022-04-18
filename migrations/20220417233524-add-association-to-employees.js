'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.addColumn
      ("employees", "employee", {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'businesses',
          key: 'id'
        }
      })
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.removeColumn("employees", "employee")
  }
};