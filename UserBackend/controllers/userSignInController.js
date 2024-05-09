const userSignIn = require("../models/userSignInModel.js");

const Login = (async (req, res) => {
    const {username, password} = req.body;

    try{
        const user = await userSignIn.findOne({ username});

        if(!user){
            return res.status(401).json({ message: 'Authentication failed. User not found.' });
        }

        const isPasswordMatch = await user.comparePassword(password);

        if(!isPasswordMatch){
            return res.status(401).json({ message: 'Authentication failed. Wrong password.' });
        }else{
            return res.status(200).json({ message: 'Authentication successful', user });
        }
    }catch(error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = Login;
