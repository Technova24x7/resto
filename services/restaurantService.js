const RestaurantRepo = require('../repositories/restaurantRepo');


class RestaurantService {
  constructor() {
    this.restaurantRepo = new RestaurantRepo();
  }

  async createRestaurant(restaurantDetails) {
    try {
      const result = await this.restaurantRepo.createRestaurant(restaurantDetails);
      return result;
    } catch (error) {
      return error;
    }
  }

  async getRestaurantByAdminId(adminId){
    try {
      const result = await this.restaurantRepo.getRestaurantByAdminId(adminId);
      return result;
    } catch (error) {
      return error;
    }
  }

  async getRestaurantById(restaurantId) {
    try {
      const result = await this.restaurantRepo.getRestaurantById(restaurantId);
      return result;
    } catch (error) {
      return error;
    }
  }

  async updateRestaurant(restaurantId, restaurantUpdates) {
    try {
      const result = await this.restaurantRepo.updateRestaurant(restaurantId, restaurantUpdates);
      return result;
    } catch (error) {
      return error;
    }
  }

  async deleteRestaurant(restaurantId) {
    try {
      const result = await this.restaurantRepo.deleteRestaurant(restaurantId);
      return result;
    } catch (error) {
      return error;
    }
  }
}

module.exports = RestaurantService;
