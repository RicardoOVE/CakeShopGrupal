const { model } = require("mongoose");
const multer = require("multer");
 
 
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'client/public/cargarImagen')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    },
});
const fileFilter = (req, file, cb) => {
    const allowedFileTypes = ['*'];
    if (allowedFileTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(null, false);
    }
}
 
module.exports.upload = multer({ storage: storage, fileFilter: fileFilter });