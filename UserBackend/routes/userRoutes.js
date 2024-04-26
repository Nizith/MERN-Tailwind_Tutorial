const router = require("express").Router();
const UserObject = require("../controllers/userController");

//create route
router.post('/user/create', UserObject.userCreate);

//read route
router.get('/user/read', UserObject.userRead);

//get one user details route
router.get('/user/get/:userId', UserObject.userGet);

//update route
router.put('/user/update/:userId', UserObject.userUpdate);

//delete route
router.delete('/user/delete/:userId', UserObject.userDelete);

module.exports = router;