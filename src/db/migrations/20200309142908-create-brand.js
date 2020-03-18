'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('brands', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: {
                type: Sequelize.STRING(100)
            },
            logo: {
                type: Sequelize.TEXT
            },
            website: {
                type: Sequelize.STRING(63)
            },
            slug: {
                type: Sequelize.STRING(100)
            },
            verified: {
                type: Sequelize.BOOLEAN
            },
            status: {
                type: Sequelize.ENUM('Draft', 'Request Aprroval', 'Approved', 'Inactive')
            },
            country_id: {
                type: Sequelize.INTEGER
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('brands');
    }
};