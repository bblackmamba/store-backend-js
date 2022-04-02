const { Sequelize } = require(`sequelize`),
  { pgUser, pgHost, pgDatabase, pgPassword, pgPort } = require('./index');

module.exports = new Sequelize(
    pgDatabase,
    pgUser,
    pgPassword,
    {
        dialect: 'postgres',
        host: pgHost,
        port: pgPort
    }
)