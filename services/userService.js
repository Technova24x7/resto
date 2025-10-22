const UserRepo = require('../repositories/userRepo');

class UserService {
  constructor() {
    this.userRepo = new UserRepo();
  }

  async createUser(userDetails) {
    try {
      const result = await this.userRepo.createUser(userDetails);
      return result;
    } catch (error) {
      return error;
    }
  }

  async getUserByPhoneNo(phoneNo){
    try {
      const result = await this.userRepo.getUserByPhoneNo(phoneNo);
      return result;
    } catch (error) {
      return error;
    }
  }

  async getUserById(userId) {
    try {
      const result = await this.userRepo.getUserById(userId);
      return result;
    } catch (error) {
      return error;
    }
  }

  async updateUser(userId, userUpdates) {
    try {
      const result = await this.userRepo.updateUser(userId, userUpdates);
      return result;
    } catch (error) {
      return error;
    }
  }

  async deleteUser(userId) {
    try {
      const result = await this.userRepo.deleteUser(userId);
      return result;
    } catch (error) {
      return error;
    }
  }
}

module.exports = UserService;
