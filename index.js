'use strict';
const express = require("express");
const cors = require("cors");
const cookieSession = require("cookie-session");
const path = require("path");
const app = express();
const multer = require("multer");
app.use(cors(
    {
        credentials: true,
        origin: ["http://localhost:8081"],
    }
));

// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
app.use(
    cookieSession({
      name: "Nathanaël-session",
      secret: "COOKIE_SECRET", // should use as secret environment variable
      httpOnly: true,
      sameSite: 'strict'
    })
);
//dossier de sauvegarde
global.__basedir = __dirname;

// database
const db = require("./app/models");
const Role = db.role;


//db.sequelize.sync();
// force: true will drop the table if it already exists
 db.sequelize.sync({force: true}).then(() => {
  console.log('Drop and Resync Database with { force: true }');
   initial();
});

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Nathanaël Jr application." });
});

// routes
require("./app/routes/auth.routes")(app);
require("./app/routes/user.routes")(app);
require("./app/routes/upload.routes")(app);
//require("./app/routes/upload.routes")(app);


// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

function initial() {
  Role.create({
    id: 1,
    name: "user",
  });

  Role.create({
    id: 2,
    name: "moderator",
  });

  Role.create({
    id: 3,
    name: "admin",
  });
}