require('dotenv').config();

const config = { 
  port: process.env.PORT|| 3001,
  pgUser: process.env.PGUSER || 'postgres',
  pgHost: process.env.PGHOST || '0.0.0.0',
  pgDatabase: process.env.PGDATABASE || 'store',
  pgPassword: process.env.PGPASSWORD || 'root',
  pgPort: process.env.PGPORT || 5432,
}

module.exports = config;