const multer = require("multer");

const imageFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb("Svp seulement les pdf(s).", false);
  }
};

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __basedir + "/resources/static/assets/uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-nathan-${file.originalname}`);
  },
});

let uploadFile = multer({ storage: storage, fileFilter: imageFilter });
module.exports = uploadFile;