"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("incidents", {
      id: {
        type: Sequelize.DataTypes.UUID,
        primaryKey: true,
        allowNull: false
      },
      title: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      description: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      value: {
        type: Sequelize.DataTypes.DECIMAL(10, 2),
        allowNull: false
      },
     ong_id: {
      type: Sequelize.DataTypes.UUID,
      allowNull: false,
      references: {
        model: "ongs",
        key: "id"
      },
      onUpdate: "cascade",
      onDelete: "cascade"
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
    return queryInterface.dropTable("incidents");
  }
};
