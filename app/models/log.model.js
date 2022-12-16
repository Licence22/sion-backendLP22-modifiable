module.exports = (sequelize, DataTypes) => {
    const LogJ = sequelize.define("log", {
      typeOperation: {
        type: DataTypes.STRING,
      }
    });
    return LogJ;
  };