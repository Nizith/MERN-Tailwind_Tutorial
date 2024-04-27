const multer = require("multer");

const storage = multer.diskStorage({
    //specify the folder where the images should be uploaded
    destination: function ( req, file, cb) {
        cb( null, './uploads');
    },
    //generate the filename using timestamps and the OG filename
    filename: function (req, file, cb) {
        cb( null, Date.now() + '-' + file.originalname);
    }
})

const upload = multer({ storage: storage});

module.exports = upload;