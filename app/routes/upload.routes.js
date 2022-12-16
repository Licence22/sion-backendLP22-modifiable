const { upload } = require("../middleware");
const uploadController = require("../controllers/upload.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
      "/upload",
      upload.single("file"), 
      uploadController.uploadFiles
  );


  app.get("/upload",
    
  );
};