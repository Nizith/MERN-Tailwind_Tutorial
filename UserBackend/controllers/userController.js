const User = require("../models/userModel");

const userCreate = ((req, res) => {
    const{ userName, userEmail, userPhone, userGender, userImage} = req.body;

    const newUser = new User({
        userName,
        userEmail,
        userPhone,
        userGender,
        userImage,
    });

    newUser.save()
    .then( () => {
        res.json("User Created.");
    })
    .catch( (err) => {
        res.json("User Creation failed.");
        console.log(err);
    })
});

module.exports = userCreate;