const  Order  = require('../models/order');

class OrderRepo {
  async createOrder(orderDetails) {
    try {
      const order = new Order(orderDetails);
      const result = await order.save();
      return result;
    } catch (error) {
      return error;
    }
  }

  async getAllOrders() {
    try {
      const result = await Order.find();
      return result;
    } catch (error) {
      return error;
    }
  }
  
  async changeOrderStatus(orderId,status) {
    try {
      const result = await Order.findByIdAndUpdate(orderId,{status:status});
      return result;
    } catch (error) {
      return error;
    }
  }
  

  async getAllOrdersByRestaurantId(restaurantId) {
    try {
      const result = await Order.find({ restaurant_id: restaurantId });
      return result;
    } catch (error) {
      return error;
    }
  }

  async getAllOrdersByRestaurantIdWithStatus(restaurantId, status) {
    try {
      const result = await Order.find({ restaurant_id: restaurantId, status: status });
      return result;
    } catch (error) {
      return error;
    }
  }
  

  async getOrderById(orderId) {
    try {
      const result = await Order.findById(orderId);
      return result;
    } catch (error) {
      return error;
    }
  }

  async updateOrder(orderId, orderUpdates) {
    try {
      const result = await Order.findByIdAndUpdate(orderId, orderUpdates, { new: true });
      return result;
    } catch (error) {
      return error;
    }
  }

  async deleteOrder(orderId) {
    try {
      const result = await Order.findByIdAndDelete(orderId);
      return result;
    } catch (error) {
      return error;
    }
  }
}

module.exports = OrderRepo;
