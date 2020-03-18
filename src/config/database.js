const { db } = require('./index');

// Sequelize options
const options = {
  dialect: 'mysql',
  define: {
    charset: 'utf-8',
  },
  logging: false,
  migrationStorageTableName: 'sequelize_migrations',
};

module.exports = {
  development: {
    ...options,
    host: db.host,
    username: db.username,
    password: db.password,
    database: db.database,
  },
  test: {
    ...options,
    host: db.host,
    username: db.username,
    password: db.password,
    database: db.database,
  },
  production: {
    ...options,
    host: db.host,
    username: db.username,
    password: db.password,
    database: db.database,
  },
};
