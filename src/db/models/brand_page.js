'use strict';
// module.exports = (sequelize, DataTypes) => {
//     const brand_page = sequelize.define('brand_page', {
//         cover_img: DataTypes.TEXT,
//         about_us: DataTypes.TEXT,
//         year_founded: DataTypes.DATE,
//         tagline: DataTypes.STRING(140),
//         brand_id: DataTypes.INTEGER
//     }, {});
//     brand_page.associate = function(models) {
//         brand_page.belongsTo(models.brand);
//     };
//     return brand_page;
// };

const { Model, DataTypes } = require('sequelize');

const sequelize = require('../../config/sequelize');

class Brand_page extends Model {}

// Model attributes
Brand_page.init({
    cover_img: DataTypes.TEXT,
    about_us: DataTypes.TEXT,
    year_founded: DataTypes.DATE,
    tagline: DataTypes.STRING(140),
    brand_id: DataTypes.INTEGER
}, {
    sequelize,
    tableName: 'brand_pages',
});

// Model associations
Brand_page.associate = models => {
    Brand_page.belongsTo(models.brand, {
        foreignKey: 'brand_id',
    });
};

module.exports = Brand_page;