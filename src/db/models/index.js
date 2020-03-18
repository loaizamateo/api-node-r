const Sequelize = require('sequelize');

const sequelize = require('../../config/sequelize');
const brand = require('./brand');
const brand_page = require('./brand_page');

// Import models
const models = {
    brand,
    brand_page
};

// Associate models
Object.keys(models).forEach(model => {
    if (models[model].associate && typeof models[model].associate === 'function') {
        models[model].associate(models);
    }
});

module.exports = {...models, sequelize, Sequelize };