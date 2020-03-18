const Router = require('express-promise-router').default;

const brandsController = require('../controllers/brands');
const { celebrate, id } = require('../middlewares/validation');

const router = Router();

router.post('/', brandsController.addBrand);
// router.get('/:id', brandsController.getBrand);
router.get(
    '/:id',
    celebrate({
        params: {
            id: id.required(),
            id: id.positive(),
        },
    }),
    brandsController.getBrand
);

router.put(
    '/:id',
    celebrate({
        params: {
            id: id.required(),
            id: id.positive(),
        },
    }),
    brandsController.updateBrand
);

router.delete(
    '/:id',
    celebrate({
        params: {
            id: id.required(),
            id: id.positive(),
        },
    }),
    brandsController.deleteBrand
);
module.exports = router;