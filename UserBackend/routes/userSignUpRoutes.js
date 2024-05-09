const router = require("express").Router();
const Register = require("../controllers/userSignUpController");
const Login = require("../controllers/userSignInController");

router.post('/user/signUp', Register);

router.post('/user/signIn', Login);

module.exports = router;