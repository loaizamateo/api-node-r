const bodyParser = require('body-parser');
const express = require('express');
const expressErrorHandler = require('@kazaar/express-error-handler');
const helmet = require('helmet');

const api = require('./api');
const { host, port, env } = require('./config');
const { sequelize } = require('./db/models');
const { verifySMTPConnection } = require('./utils/mail');
const logger = require('./config/logger');

const {
    httpErrorHandler,
    handleServerError,
    celebrateErrorParser,
    sequelizeErrorParser,
    handleSequelizeConnectionError,
} = expressErrorHandler(logger);

/**
 * Express server initialization
 */
const app = express();

/**
 * Application configuration
 */
app.use(bodyParser.json());
app.use(helmet());

/**
 * API documentation
 */
app.use('/docs', express.static(`${__dirname}/api/doc`));

/**
 * API routes
 */
app.use('/api', api);

/**
 * Base route
 */
app.get('/', (req, res) => res.redirect('/docs'));

/**
 * Error handling
 */
Error.stackTraceLimit = 10;

app.use(celebrateErrorParser);
app.use(sequelizeErrorParser);
app.use(httpErrorHandler);

/**
 * Server start
 */
app
    .listen(port, host, () => {
        logger.info(`App is running at ${host}:${port} in ${env} mode`);

        // Verify database connection
        sequelize
            .authenticate()
            .then(() => logger.info(`Successfully connected to ${sequelize.config.database} database`))
            .catch(handleSequelizeConnectionError);

        // Verify SMTP connection
        // verifySMTPConnection();
    })
    .on('error', handleServerError);

module.exports = app;