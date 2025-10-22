const express = require('express');
const OrderService = require('../services/orderService');

const router = express.Router();
const orderService = new OrderService();

// Create a new order
router.post('/api/orders', async (req, res) => {
  try {
    let orderDetails = req.body;
    orderDetails.user_id = req.session.user._id;
    orderDetails.restaurant_id = req.session.restaurant._id;

    const result = await orderService.createOrder(orderDetails);
    if(result){
      console.log(result);
      res.json({result:true,message:'Order created successfully'});
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

// change order status
router.put('/api/orders/status/:orderId', async (req, res) => {
  try {
    let status = req.body.status;
    const result = await orderService.changeOrderStatus(req.params.orderId,status);
    if(result){
      console.log(result);
      res.json({result:true,message:'Order status changed successfully'});
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});


// Get All orders by restaurant id
router.get('/api/orders', async (req, res) => { 
  try {
    const result = await orderService.getAllOrdersByRestaurantId(req.session.restaurant._id);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});

// get all orders where status is preparing
router.get('/api/orders/preparing', async (req, res) => {
  try {
    let status = 'preparing';
    const result = await orderService.getAllOrdersByRestaurantIdWithStatus(req.session.restaurant._id,status);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});

// Get all orders where status is done
router.get('/api/orders/done', async (req, res) => {
  try {
    let status = 'done';
    const result = await orderService.getAllOrdersByRestaurantIdWithStatus(req.session.restaurant._id,status);
    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

// Get all orders where status is cancelled
router.get('/api/orders/cancelled', async (req, res) => {
  try {
    let status = 'cancelled';
    const result = await orderService.getAllOrdersByRestaurantIdWithStatus(req.session.restaurant._id,status);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});



// Get an order by ID
router.get('/orders/:orderId', async (req, res) => {
  try {
    const result = await orderService.getOrderById(req.params.orderId);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});

// Update an order
router.put('/orders/:orderId', async (req, res) => {
  try {
    const result = await orderService.updateOrder(req.params.orderId, req.body);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});

// Delete an order
router.delete('/orders/:orderId', async (req, res) => {
  try {
    const result = await orderService.deleteOrder(req.params.orderId);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});

module.exports = router;
