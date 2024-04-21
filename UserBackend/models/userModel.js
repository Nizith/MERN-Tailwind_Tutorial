const mongoose = require("mongoose");

const schema = mongoose.Schema;

const UserSchema = new schema({
    userName: {
        Type: String,
        Required: true,
    },
    userEmail:{
        Type: String,
        Required: true,
    },
    userPhone: {
        Type: Number,
        Required: true,
    },
    userImage:{
        Type: String,
        Required:  true,
    },
});

const userModel = mongoose.model("userData", UserSchema);

module.exports = userModel;
