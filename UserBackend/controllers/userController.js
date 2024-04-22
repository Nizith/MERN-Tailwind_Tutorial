const User = require("../models/userModel");

const userCreate = ((req, res) => {
    const { userName, userEmail, userPhone, userGender, userImage} = req.body;

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

const userRead = ( (req, res) => {
    User.find()
    .then( (userData) => {
        res.json(userData);
    })
    .catch( (err) => {
        res.json(err)
    });
});

const userGet = ( async (req, res) => {
    const userID = req.params.userId;

    await User.findById(userID)
    .then( (userData) => {
        res.json(userData);
    })
    .catch( (err) => {
        res.json(err);
    });
});

const userUpdate = (async (req, res) => {
    const userID = req.params.userId;

    const { userName, userEmail, userPhone, userGender, userImage} = req.body;

    const updateUser = {
        userName,
        userEmail,
        userPhone,
        userGender,
        userImage,        
    };

    await User.findByIdAndUpdate(userID, updateUser)
    .then( () => {
        res.json("User Updated.");
    })
    .catch( (err) => {
        res.json("User updating error");
        console.log(err);
    });
});

module.exports = {
    userCreate,
    userRead,
    userGet,
    userUpdate
};