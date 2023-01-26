'use strict';
const tableName = 'users';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      tableName,
      {
        id: {
          type: Sequelize.INTEGER(11),
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
          field: 'id',
        },
        firstname: {
          type: Sequelize.STRING(20),
          allowNull: true,
          field: 'name',
        },
        lastname: {
          type: Sequelize.STRING(20),
          allowNull: true,
          field: 'lastname',
        },
      },
      {
        timestamps: false,
      }
    );
  },

  down: async (queryInterface) => {
    return queryInterface.dropTable(tableName);
  },
};
