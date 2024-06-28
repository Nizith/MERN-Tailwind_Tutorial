const User = require("../models/userModel");

//create controller
const userCreate = ((req, res) => {
    const { userName, userEmail, userPhone, userGender} = req.body;

    const userImage = req.file.filename;

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
        res.json("User Creation failed.")
        console.log(err);
    })
});

//read controller
const userRead = ( (req, res) => {
    User.find()
    .then( (userData) => {
        res.json(userData);
    })
    .catch( (err) => {
        res.json(err)
    });
});



//get one user details controller
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


//update controller
const userUpdate = (async (req, res) => {
    const userId = req.params.userId;

    const { userName, userEmail, userPhone, userGender} = req.body;

    let userImage;
    if (req.file) {
        userImage = req.file.filename;
    }

    const updateUser = {
        userName,
        userEmail,
        userPhone,
        userGender,
        ...(userImage && { userImage })     
    };

    await User.findByIdAndUpdate(userId, updateUser)
    .then( () => {
        res.json("User Updated.");
    })
    .catch( (err) => {
        res.json("User updating error");
        console.log(err);
    });
});


//delete controller
const userDelete = (async(req, res) => {
    const userID = req.params.userId;

    await User.findByIdAndDelete( userID)
    .then( () => {
        res.json("User Deleted.");
    })
    .catch( (err) => {
        res.json("User deletion failed.");
        console.log(err);
    });

});


module.exports = {
    userCreate,
    userRead,
    userGet,
    userUpdate,
    userDelete
};