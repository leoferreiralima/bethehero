"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("ongs", {
      id: {
        type: Sequelize.DataTypes.UUID,
        primaryKey: true,
        allowNull: false
      },
      code: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      whatsapp: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      city: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      uf: {
        type: Sequelize.DataTypes.STRING(2),
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("ongs");
  }
};
