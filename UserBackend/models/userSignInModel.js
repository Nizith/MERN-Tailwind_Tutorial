const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

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

// Hash the password before saving
LoginSchema.pre('save', async function(next) {
    const user = this;
    if (!user.isModified('password')) return next();
    const hashedPassword = await bcrypt.hash(user.password, 10);
    user.password = hashedPassword;
    next();
  });
  
  // Method to compare passwords
  LoginSchema.methods.comparePassword = async function(userPassword) {
    return bcrypt.compare(userPassword, this.password);
  };

const loginModel = mongoose.model("usersignin", LoginSchema);

module.exports = loginModel;