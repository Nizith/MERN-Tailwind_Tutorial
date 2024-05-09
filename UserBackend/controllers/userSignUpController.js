const userSignUp = require("../models/userSignUpModel.js");

const Register = (async (req, res) => {
    const { username, password } = req.body;

    try {
        const existUser = await userSignUp.findOne({ username });

        if (existUser) {
            console.log(Error)
            return res.status(400).json({ message: 'Email already exists.' });
        }
        const newUser = new userSignUp({
            username,
            password
        });
        await newUser.save();

        res.status(201).json({ message: 'User created successfully', user: newUser });

    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = Register;