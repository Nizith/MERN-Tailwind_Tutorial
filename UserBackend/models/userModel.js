const mongoose = require("mongoose");
const yup = require("yup");

const schema = mongoose.Schema;

// Define a Yup schema for validation
const userSchemaValidation = yup.object().shape({
    userName: yup.string().min(5, "UserName is too short").max(50, "Username is too long").required(),
    userEmail: yup.string().email().required(), 
    userPhone: yup.string().matches(/^7\d{8}$/, "Mobile number must start with '07'").required(),
    userGender: yup.string().required(),
    userImage: yup.string().required(),
});

const UserSchema = new schema({
    userName: {
        type: String,
        required: true,
    },
    userEmail: {
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
    userImage: {
        type: String,
        required: true,
    },
});

// Add a pre-save hook to validate the data before saving it to the database
UserSchema.pre('save', async function(next) {
    try {
        await userSchemaValidation.validate(this.toObject());
        next();
    } catch (error) {
        next(error);
    }
});

const userModel = mongoose.model("userdetail", UserSchema);

module.exports = userModel;
