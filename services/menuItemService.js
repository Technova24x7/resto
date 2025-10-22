const MenuItemRepo = require('../repositories/menuItemRepo');

class MenuItemService {
  constructor() {
    this.menuItemRepo = new MenuItemRepo();
  }

  async getMenuItemsByRestaurantIdWithName(restaurantId, name) {
    try {
      const result = await this.menuItemRepo.getMenuItemsByRestaurantIdWithName(restaurantId, name);
      return result;
    } catch (error) {
      return error;
    }
  }
  
  async createMenuItem(menuItemDetails) {
    try {
      const result = await this.menuItemRepo.createMenuItem(menuItemDetails);
      return result;
    } catch (error) {
      return error;
    }
  }

  async getMenuItemPrice(id){
    try {
      const result = await this.menuItemRepo.getMenuItemById(id);
      console.log(`menu item ${result}`);
      return result.price;
    } catch (error) {
      
      return error;
    }
  }

  async getAllMenuItemOfRestaurant(restaurantId){

    try {
      const result = await this.menuItemRepo.getAllMenuItemOfRestaurant(restaurantId);
      return result;
    } catch (error) {
      
    }
  }

  async getMenuItemById(menuItemId) {
    try {
      const result = await this.menuItemRepo.getMenuItemById(menuItemId);
      return result;
    } catch (error) {
      return error;
    }
  }

  async updateMenuItem(menuItemId, menuItemUpdates) {
    try {
      const result = await this.menuItemRepo.updateMenuItem(menuItemId, menuItemUpdates);
      return result;
    } catch (error) {
      return error;
    }
  }

  async deleteMenuItem(menuItemId) {
    try {
      const result = await this.menuItemRepo.deleteMenuItem(menuItemId);
      return result;
    } catch (error) {
      return error;
    }
  }
}

module.exports = MenuItemService;
