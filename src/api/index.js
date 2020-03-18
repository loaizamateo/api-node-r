const { Router } = require('express');
const { NotFound } = require('http-errors');
const morgan = require('morgan');

const logger = require('../config/logger');

const router = Router();
const brandsRouter = require('./routes/brands');

/**
 * Router configuration
 */
router.use(
    morgan(':status - [:method :url - :remote-addr] :response-time ms', {
        stream: {
            write: message => logger.info(message),
        },
        skip: (req, res) => res.statusCode >= 400,
    })
);

/**
 * API routes
 */
router.get('/', (req, res) => res.sendStatus(200));
router.use('/brands', brandsRouter);

/**
 * 404 error handling
 */
router.use((req, res, next) => {
    const { baseUrl, url, method } = req;

    next(new NotFound(`The route '${method} ${baseUrl}${url}' doesn't exist.`));
});

module.exports = router;