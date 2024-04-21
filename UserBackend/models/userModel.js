const mongoose = require("mongoose");

const schema = mongoose.Schema;

const UserSchema = new schema({
    userName: {
        type: String,
        required: true,
    },
    userEmail:{
        type: String,
        required: true,
    },
    userPhone: {
        type: Number,
        required: true,
    },
    userGender: {
        type: String,
        required: true,
    },
    userImage:{
        type: String,
        required:  true,
    },
});

const userModel = mongoose.model("userdatas", UserSchema);

module.exports = userModel;
