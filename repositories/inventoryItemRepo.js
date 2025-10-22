const  InventoryItem  = require('../models/inventoryItem');

class InventoryItemRepo {
  async createInventoryItem(inventoryItemDetails) {
    try {
      const inventoryItem = new InventoryItem(inventoryItemDetails);
      const result = await inventoryItem.save();
      return result;
    } catch (error) {
      return error;
    }
  }
  

  async getInventoryItemByRestaurantId(restaurantId) {
    try {
      const result = await InventoryItem.find({restaurant_id:restaurantId});
      return result;
    } catch (error) {
      return error;
    }
  }
  async getInventoryItemById(inventoryItemId) {
    try {
      const result = await InventoryItem.findById(inventoryItemId);
      return result;
    } catch (error) {
      return error;
    }
  }

  async updateInventoryItem(inventoryItemId, inventoryItemUpdates) {
    try {
      const result = await InventoryItem.findByIdAndUpdate(inventoryItemId, inventoryItemUpdates, { new: true });
      return result;
    } catch (error) {
      return error;
    }
  }

  async deleteInventoryItem(inventoryItemId) {
    try {
      const result = await InventoryItem.findByIdAndDelete(inventoryItemId);
      return result;
    } catch (error) {
      return error;
    }
  }
}

module.exports = InventoryItemRepo;
