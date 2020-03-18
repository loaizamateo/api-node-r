'use strict';
// module.exports = (sequelize, DataTypes) => {
//     const brand = sequelize.define('brand', {
//         name: DataTypes.STRING(100),
//         logo: DataTypes.TEXT,
//         website: DataTypes.STRING(63),
//         slug: DataTypes.STRING(100),
//         verified: DataTypes.BOOLEAN,
//         status: DataTypes.ENUM('Draft', 'Request Aprroval', 'Approved', 'Inactive'),
//         country_id: DataTypes.INTEGER
//     }, {});
//     brand.associate = function(models) {
//         brand.hasOne(models.brand_page, {
//             foreignKey: 'brand_id'
//         });
//     };
//     return brand;
// };

const { Model, DataTypes } = require('sequelize');

const sequelize = require('../../config/sequelize');

class Brand extends Model {}

// Model attributes
Brand.init({
    name: DataTypes.STRING(100),
    logo: DataTypes.TEXT,
    website: DataTypes.STRING(63),
    slug: DataTypes.STRING(100),
    verified: DataTypes.BOOLEAN,
    status: DataTypes.ENUM('Draft', 'Request Aprroval', 'Approved', 'Inactive'),
    country_id: DataTypes.INTEGER
}, {
    timestamps: false,
    sequelize,
    tableName: 'brands',
});

// Model associations
Brand.associate = models => {
    Brand.hasOne(models.brand_page, {
        foreignKey: 'brand_id',
    });
};

module.exports = Brand;