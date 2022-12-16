module.exports = {
  HOST: "localhost",
  USER: "postgres",
  PASSWORD: "azerty",
  DB: "SionBD",
  dialect: "postgres",
  pool: {
    max: 18,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};