const InventoryItemRepo = require('../repositories/inventoryItemRepo');

class InventoryItemService {
  constructor() {
    this.inventoryItemRepo = new InventoryItemRepo();
  }

  async createInventoryItem(inventoryItemDetails) {
    try {
      const result = await this.inventoryItemRepo.createInventoryItem(inventoryItemDetails);
      return result;
    } catch (error) {
      return error;
    }
  }

  async   getInventoryItemByResataurantId(restaurantId) {
    try {
      const result = await this.inventoryItemRepo.getInventoryItemByRestaurantId(restaurantId);
      return result;
    } catch (error) {
      return error;
    }
  }

  async getInventoryItemById(inventoryItemId) {
    try {
      const result = await this.inventoryItemRepo.getInventoryItemById(inventoryItemId);
      return result;
    } catch (error) {
      return error;
    }
  }

  async updateInventoryItem(inventoryItemId, inventoryItemUpdates) {
    try {
      const result = await this.inventoryItemRepo.updateInventoryItem(inventoryItemId, inventoryItemUpdates);
      return result;
    } catch (error) {
      return error;
    }
  }

  async deleteInventoryItem(inventoryItemId) {
    try {
      const result = await this.inventoryItemRepo.deleteInventoryItem(inventoryItemId);
      return result;
    } catch (error) {
      return error;
    }
  }
}

module.exports = InventoryItemService;
