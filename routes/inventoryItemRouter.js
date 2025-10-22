const express = require('express');
const InventoryItemService = require('../services/inventoryItemService');
//const AuthenticationService = require('../services/authenticationService');

const router = express.Router();
const inventoryItemService = new InventoryItemService();
//const authenticationService = new AuthenticationService();


// Create a new inventory item
router.post('/api/inventoryItems', async (req, res) => {
  try {
    
    let inventoryItem = req.body;
    inventoryItem.restaurant_id = req.session.restaurant._id;
    const result = await inventoryItemService.createInventoryItem(req.body);
    if(result.name == req.body.name){
      res.json({result:true,message:'inventory item added'});
    }
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});

// Get inventory items by restaurant id 
router.get('/api/inventoryItems', async (req, res) => {
  try {
    let restaurant_id = req.session.restaurant._id;

    const result = await inventoryItemService.getInventoryItemByResataurantId(restaurant_id);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});


// Get an inventory item by ID
router.get('/api/inventoryItems/:inventoryItemId', async (req, res) => {
  try {
    const result = await inventoryItemService.getInventoryItemById(req.params.inventoryItemId);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});

// Update an inventory item
router.put('/api/inventoryItems/:inventoryItemId', async (req, res) => {
  try {
    const result = await inventoryItemService.updateInventoryItem(req.params.inventoryItemId, req.body);
    if(result._id == req.params.inventoryItemId){
      res.json({result:true,message:'inventory item updated'});
    }
    
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});

// Delete an inventory item
router.delete('/api/inventoryItems/:inventoryItemId', async (req, res) => {
  try {
    const result = await inventoryItemService.deleteInventoryItem(req.params.inventoryItemId);
    if(result.id ==  req.params.inventoryItemId){
      res.json({result:true,message:'inventory item deleted'});
    }
    
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});

module.exports = router;
