const { brand } = require('../db/models');

module.exports = {
    async addBrand(brandDetails) {
        const newBrand = await brand.create(brandDetails);

        return newBrand;
    },

    async getBrandById(brandId) {
        const brandR = await brand.findByPk(brandId);

        return brandR;
    },

    async updateBrandById(brandDetails, brandId) {
        const brandR = await brand.update(brandDetails, { where: { id: brandId } })

        return brandR;
    },

    async deleteBrandById(brandId) {
        const brandR = await brand.destroy({ where: { id: brandId } })

        return brandR;
    },
};