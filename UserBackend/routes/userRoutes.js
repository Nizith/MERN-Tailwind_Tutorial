const router = require("express").Router();
const UserObject = require("../controllers/userController");

router.post('/user/create', UserObject.userCreate);

router.get('/user/read', UserObject.userRead);

router.get('/user/get/:userId', UserObject.userGet);

router.put('/user/update/:userId', UserObject.userUpdate);

router.delete('/user/delete/:userId', UserObject.userDelete);

module.exports = router;