const express = require("express");
const router = express.Router();
const UserObject = require("../controllers/userController");
const upload = require("./upload");
const path = require("path");

//create route
router.post('/user/create',(upload.single('userImage')), UserObject.userCreate);

//read route

//image folder accessing
router.use('/user/uploads', express.static( path.join(__dirname, '../uploads')));

router.get('/user/read', UserObject.userRead);

//get one user details route
router.get('/user/get/:userId', UserObject.userGet);

//update route
router.put('/user/update/:userId',(upload.single('userImage')), UserObject.userUpdate);

//delete route
router.delete('/user/delete/:userId', UserObject.userDelete);

module.exports = router;