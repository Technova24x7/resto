const OrderRepo = require('../repositories/orderRepo');
const MenuItemService = require('../services/menuItemService');

class OrderService {
  constructor() {
    this.orderRepo = new OrderRepo();
    this.menuItemServie = new MenuItemService();

  }

  async changeOrderStatus(orderId,status) {
    try {
      const result = await this.orderRepo.changeOrderStatus(orderId,status);
      return result;
    } catch (error) {
      return error;
    }
  }
  

  async createOrder(orderDetails) {
    let total = 0;
    for(const item of orderDetails.items){
      console.log('item data');
      console.log(item);
      let price = await this.menuItemServie.getMenuItemPrice(item.menuItemId);
     
      total += (price * item.quantity);
    }
    orderDetails.total = total;
    try {
      const result = await this.orderRepo.createOrder(orderDetails);
      return result;
    } catch (error) {
      return error;
    }
  }

  async getAllOrders() {
    try {
      const result = await this.orderRepo.getAllOrders();
      return result;
    } catch (error) {
      return error;
    }
  }

  async getAllOrdersByRestaurantId(restaurantId) {
    try { 
      const result = await this.orderRepo.getAllOrdersByRestaurantId(restaurantId);
      return result;
    } catch (error) {
      return error;
    }
  }

  async getAllOrdersByRestaurantIdWithStatus(restaurantId,status) {
    try {
      
      const result = await this.orderRepo.getAllOrdersByRestaurantIdWithStatus(restaurantId,status);
      return result;
    } catch (error) {
      return error;
    }
  }

  async getOrderById(orderId) {
    try {
      const result = await this.orderRepo.getOrderById(orderId);
      return result;
    } catch (error) {
      return error;
    }
  }

  async updateOrder(orderId, orderUpdates) {
    try {
      const result = await this.orderRepo.updateOrder(orderId, orderUpdates);
      return result;
    } catch (error) {
      return error;
    }
  }

  async deleteOrder(orderId) {
    try {
      const result = await this.orderRepo.deleteOrder(orderId);
      return result;
    } catch (error) {
      return error;
    }
  }
}

module.exports = OrderService;
