const BrandService = require('../../services/brand');
const { NotFound } = require('http-errors');

module.exports = {
    async addBrand(req, res, next) {
        const brandDetails = req.body;

        const brand = await BrandService.addBrand(brandDetails);

        res.status(200).send(brand);
    },

    async getBrand(req, res, next) {
        const { id } = req.params;

        const brand = await BrandService.getBrandById(id);

        if (!brand) {
            throw new NotFound('Brand not found.');
        }

        res.status(200).send(brand);
    },

    async updateBrand(req, res, next) {
        const { id } = req.params;
        const brandDetails = req.body;

        const brand = await BrandService.updateBrandById(brandDetails, id);

        if (!brand) {
            throw new NotFound('Brand not found.');
        }

        res.status(200).send({ "message": "Updated brand" });
    },

    async deleteBrand(req, res, next) {
        const { id } = req.params;

        const brand = await BrandService.deleteBrandById(id);

        if (!brand) {
            throw new NotFound('Brand not found.');
        }

        res.status(200).send({ "message": "Brand removed" });
    },
};