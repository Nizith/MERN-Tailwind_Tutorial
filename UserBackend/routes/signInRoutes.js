const router = require("express").Router();
const Login = require("../controllers/userSignInController");

router.post('/user/signIn', Login);

module.exports = router;