const User = require('../models/user');

class UserRepo {

  async createUser(userDetails) {
    try {
      const user = new User(userDetails);
      const result = await user.save();
     
      return result;
    } catch (error) {
      return error;
    }
  }

  async getUserByPhoneNo(phoneNo){
    try {
      const result = await User.find({phoneno:phoneNo});
      return result;
    } catch (error) {
      return error;
    }
  }

  async getUserById(userId) {
    try {
      const result = await User.findById(userId);
      return result;
    } catch (error) {
      return error;
    }
  }

  async updateUser(userId, userUpdates) {
    try {
      const result = await User.findByIdAndUpdate(userId, userUpdates, { new: true });
      return result;
    } catch (error) {
      return error;
    }
  }

  async deleteUser(userId) {
    try {
      const result = await User.findByIdAndDelete(userId);
      return result;
    } catch (error) {
      return error;
    }
  }
}

module.exports = UserRepo;
