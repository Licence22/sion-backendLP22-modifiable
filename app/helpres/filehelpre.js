const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'DocSasi');
    },
    filename: (req, file, cb) => {
        let originalname = file.originalname;
        let ext = originalname.split('.').pop();
        let filename = originalname.split('.').slice(0, -1).join('.');
        cb(null, filename + '-' + Date.now()+'.'+ext)
    }
});
const filefilter = (req, file, cb) => {
    if (file.mimetype === 'application/pdf' || file.mimetype === 'application/PDF'){
        cb(null, true);
    }else {
        cb(null, false);
    }
}

const DocSas = multer({
    storage: storage,
    filefilter: filefilter
});

module.exports = {DocSas}