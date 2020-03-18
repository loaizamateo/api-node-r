'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('brand_pages', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            cover_img: {
                type: Sequelize.TEXT
            },
            about_us: {
                type: Sequelize.TEXT
            },
            year_founded: {
                type: Sequelize.DATE
            },
            tagline: {
                type: Sequelize.STRING(140)
            },
            brand_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: { // User belongsTo Company 1:1
                    model: 'brands',
                    key: 'id'
                }
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('brand_pages');
    }
};