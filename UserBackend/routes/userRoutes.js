const router = require("express").Router();
const UserObject = require("../controllers/userController");

router.post('/user/create', UserObject);

module.exports = router;