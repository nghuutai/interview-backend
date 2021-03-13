'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('user', {
        id: {
            allowNull: false,
            primaryKey: true,
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
        },
        name: {
            type: Sequelize.STRING,
        },
        role: {
            type: Sequelize.STRING,
        },
        created_at: {
            type: Sequelize.DATE,
            allowNull: false,
            // defaultValue: Sequelize.NOW,
        },
        updated_at: {
            allowNull: false,
            type: Sequelize.DATE,
            // defaultValue: Sequelize.NOW,
        },
    });

    await queryInterface.createTable('department', {
        id: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
        },
        name: {
          type: Sequelize.STRING,
        },
        management_by: {
          type: Sequelize.UUID,
          references: {
            model: 'user',
            key: 'id'
          },
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
          // defaultValue: Sequelize.NOW,
        },
        updated_at: {
          allowNull: false,
          type: Sequelize.DATE,
          // defaultValue: Sequelize.NOW,
        },
    });

    await queryInterface.createTable('team', {
        id: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
        },
        name: {
          type: Sequelize.STRING,
        },
        department_id: {
          type: Sequelize.UUID,
          references: {
            model: 'department',
            key: 'id'
          },
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
          // defaultValue: Sequelize.NOW,
        },
        updated_at: {
          allowNull: false,
          type: Sequelize.DATE,
          // defaultValue: Sequelize.NOW,
        },
    });

    await queryInterface.createTable('user_team', {
        id: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
        },
        user_id: {
          type: Sequelize.UUID,
          references: {
            model: 'user',
            key: 'id'
          },
        },
        team_id: {
          type: Sequelize.UUID,
          references: {
            model: 'team',
            key: 'id'
          },
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
          // defaultValue: Sequelize.NOW,
        },
        updated_at: {
          allowNull: false,
          type: Sequelize.DATE,
          // defaultValue: Sequelize.NOW,
        },
    });

  },
  down: async (queryInterface, Sequelize) => {
    // we can do this because it is the first migration
    await queryInterface.dropTable('user');
    await queryInterface.dropTable('department');
    await queryInterface.dropTable('team');
    await queryInterface.dropTable('user_team');
  },
};