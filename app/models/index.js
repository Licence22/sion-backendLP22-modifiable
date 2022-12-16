const config = require("../config/db.config.js");

const Sequelize= require("sequelize");
const sequelize = new Sequelize(
    config.DB,
    config.USER,
    config.PASSWORD,
    {
        host: config.HOST,
        dialect: config.dialect,
        operatorsAliases: false,

        pool: {
            max: config.pool.max,
            min: config.pool.min,
            acquire: config.pool.acquire,
            idle: config.pool.idle
        }
    }
);


const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.sequelize = sequelize;
//db.sequelize = sequelize;


db.user = require("../models/user.model.js")(sequelize, Sequelize);
db.role = require("../models/role.model.js")(sequelize, Sequelize);
db.images = require("./image.model.js")(sequelize, Sequelize);
//db.log = require("./log.model.js")(sequelize, Sequelize);
//relation user et role
db.role.belongsToMany(db.user, {
    through: "user_roles",
    foreignKey: "roleId",
    otherKey: "userId"
});
db.user.belongsToMany(db.role, {
    through: "user_roles",
    foreignKey: "userId",
    otherKey: "roleId"
});
//relation document et user
db.user.belongsToMany(db.images,{
    through: "operations",
    foreignKey: "userId",
    otherKey: "imageId"
});
db.images.belongsToMany(db.user,{
    through: "operations",
    foreignKey: "imageId",
    otherKey: "userId"
});
//relation journal et operations
/*db.operations.hasMany(db.log, { as:"logs"});
db.log.belongsTo(db.operations,{
    foreignKey : "operationsId",
    as: "operations",
});*/

db.ROLES = ["user", "admin", "moderator"];

module.exports = db;