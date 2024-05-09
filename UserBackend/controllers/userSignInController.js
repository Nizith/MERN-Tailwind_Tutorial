const userSignUp = require("../models/userSignUpModel.js");
const bcrypt = require("bcrypt");

const Login = (async (req, res) => {
    const {username, password} = req.body;

    try{
        const user = await userSignUp.findOne({ username});

        if(!user){
            return res.status(401).json({ message: 'Authentication failed. User not found.' });
        }

        const isPasswordMatch = await bcrypt.compare(password, user.password);

        if(!isPasswordMatch){
            return res.status(401).json({ message: 'Authentication failed. Wrong password.' });
        }else{
            return res.status(200).json({ message: 'Authentication successful', user });
        }
    }catch(error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = Login;