const  Restaurant  = require('../models/restaurant');

class RestaurantRepo {
    
  async createRestaurant(restaurantDetails) {
    try {
      const restaurant = new Restaurant(restaurantDetails);
      const result = await restaurant.save();
      return result;
    } catch (error) {
      return error;
    }
  }

  async getRestaurantByAdminId(adminId){
    try {
      const result = await Restaurant.find({admin_id:adminId});
      return result;
    } catch (error) {
      return error;0
    }
  }


  async getRestaurantById(restaurantId) {
    try {
      const result = await Restaurant.findById(restaurantId);
      return result;
    } catch (error) {
      return error;
    }
  }

  async updateRestaurant(restaurantId, restaurantUpdates) {
    try {
      const result = await Restaurant.findByIdAndUpdate(restaurantId, restaurantUpdates, { new: true });
      return result;
    } catch (error) {
      return error;
    }
  }

  async deleteRestaurant(restaurantId) {
    try {
      const result = await Restaurant.findByIdAndDelete(restaurantId);
      return result;
    } catch (error) {
      return error;
    }
  }
}

module.exports = RestaurantRepo;
