const mongoose = require('mongoose');


// User Schema
const userSchema = new mongoose.Schema({
    password: { type: String },
    phoneno: { type: String , index: {unique:true,dropDups: true} },
    role: { type: String }
  });

const User = mongoose.model('User', userSchema);

module.exports = User;