const mongoose = require('mongoose');


const schema = mongoose.Schema;

const LoginSchema = new schema({
    username: {
        type : String,
        required : true,
    },
    password: {
        type : String,
        required : true
    }
})

const loginModel = mongoose.model("userlogin", LoginSchema);

module.exports = loginModel;