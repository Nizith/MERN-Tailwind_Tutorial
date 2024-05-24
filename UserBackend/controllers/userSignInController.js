const userSignUp = require("../models/userSignUpModel");
const bcrypt = require("bcrypt");

const Login = (req, res) => {
    const { username, password } = req.body;

    userSignUp.findOne({ username: username })
    .then( user => {
        if(user.password === password){
            res.status(200).json({ message: 'Authentication successful', user });
        }
        else{
            res.status(401).json({ message: 'Authentication failed. Wrong password.' });
        }
    })
    .catch( (err) => {
        res.status(401).json({message: 'INternal server error'});
    })

    

    // try {
    //     const user = userSignUp.findOne({ username });

    //     if (!user) {
    //         return res.status(401).json({ message: 'Authentication failed. User not found.' });
    //     }
    //     else {
    //         const isPasswordMatch =  bcrypt.compare(password, user.password);

    //         if (!isPasswordMatch) {
    //             return res.status(401).json({ message: 'Authentication failed. Wrong password.' });
    //         } else {
    //             return res.status(200).json({ message: 'Authentication successful', user });
    //         }
    //     }
    // } catch (error) {
    //     console.error(error);
    //     res.status(500).json({ message: 'Internal server error' });
    // }
};

module.exports = Login;