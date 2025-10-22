const  MenuItem  = require('../models/menuItem');

class MenuItemRepo {
  async createMenuItem(menuItemDetails) {
    try {
      const menuItem = new MenuItem(menuItemDetails);
      const result = await menuItem.save();
      return result;
    } catch (error) {
      return error;
    }
  }

  async getMenuItemsByRestaurantIdWithName(restaurantId, name) {
    try {
      const result = await MenuItem.find({ restaurant_id: restaurantId, name: new RegExp(name, 'i') });
      return result;
    } catch (error) {
      return error;
    }
  }

  async getAllMenuItemOfRestaurant(restaurantId){
    try {
        const result = await MenuItem.find({restaurant_id:restaurantId});
        return result;
    } catch (error) {
      return error;
    }
  }
  async getMenuItemById(menuItemId) {
    try {
      const result = await MenuItem.findById(menuItemId);
      return result;
    } catch (error) {
      return error;
    }
  }

  async updateMenuItem(menuItemId, menuItemUpdates) {
    try {
      const result = await MenuItem.findByIdAndUpdate(menuItemId, menuItemUpdates, { new: true });
      return result;
    } catch (error) {
      return error;
    }
  }

  async deleteMenuItem(menuItemId) {
    try {
      const result = await MenuItem.findByIdAndDelete(menuItemId);
      return result;
    } catch (error) {
      return error;
    }
  }
}

module.exports = MenuItemRepo;
