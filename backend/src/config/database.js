require("./env");

const urlParseDbConnection = require("../utils/urlParseDbConnection");

module.exports = Object.assign(
  {
    dialect: process.env.DB_DIALECT,
    storage: process.env.DB_STORAGE,
    logging: process.env.SQL_LOG === "true"? console.log: false,
    define: {
      timesamps: true,
      underscored: true,
      underscoredAll: true
    }
  },
  urlParseDbConnection(process.env.DB_URL)
);
