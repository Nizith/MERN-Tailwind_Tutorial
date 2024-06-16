const mongoose = require("mongoose");
const yup = require("yup");

const schema = mongoose.Schema;

const RegisterValidateSchema = yup.object().shape({
    username: yup.string().email().required(),
    password: yup.string().min(8, "Password should have atleast 8 characters").max(40).required()
})

const RegisterSchema = schema({
    username: {
        type : String,
        required : true,
    },
    password: {
        type : String,
        required : true
    }
})

RegisterSchema.pre('save' , async function(next) {
    try {
        await RegisterValidateSchema.validate(this.toObject());
        next();
    }
    catch(error) {
        next(error);
    }
})

const registerModel = mongoose.model('userregister', RegisterSchema);

module.exports = registerModel;