const router = require("express").Router();
const UserObject = require("../controllers/userController");

router.post('/user/create', UserObject.userCreate);

router.get('/user/read', UserObject.userRead);

module.exports = router;