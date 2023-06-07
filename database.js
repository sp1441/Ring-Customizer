const Sequelize = require('sequelize');
const dbConfig = require('./config.json');

const sequelize = new Sequelize(
  dbConfig.development.database,
  dbConfig.development.username,
  dbConfig.development.password,
  {
    host: dbConfig.development.host,
    dialect: dbConfig.development.dialect,
    logging: false, // turning off logging for cleaner console output
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Models/tables
db.users = require('./models/user.js')(sequelize, Sequelize);
db.rings = require('./models/ring.js')(sequelize, Sequelize);
db.bands = require('./models/band.js')(sequelize, Sequelize);
db.gems = require('./models/gem.js')(sequelize, Sequelize);

module.exports = db;
