const express = require('express');
const MenuItemService = require('../services/menuItemService');
//const AuthenticationService = require('../services/authenticationService');

const router = express.Router();
const menuItemService = new MenuItemService();
//const authenticationService = new AuthenticationService();

// Create a new menu item
router.post('/api/menuItems', async (req, res) => {
  try {
    let menuitem = req.body;
    menuitem.restaurant_id = req.session.restaurant._id;
    
    const result = await menuItemService.createMenuItem(menuitem);
    if(result.name == menuitem.name){
      res.json({result:true,message:'menu item is added'});
    }
     
    
    
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});

//Get all MenuItem of logged in restaurant

router.get('/api/menuItems',async(req,res)=>{
  try{
    let restaurantId = req.session.restaurant._id;
    console.log(restaurantId);

    const result = await menuItemService.getAllMenuItemOfRestaurant(restaurantId);
    res.json(result);
  }
  catch(error){
    res.status(500).json({ error: 'An error occurred' });
  }
});

// Get menu items by restaurant ID with name
router.get('/api/menuItems/search/:name', async (req, res) => {
  let restaurantId = req.session.restaurant._id;
  try {
    const result = await menuItemService.getMenuItemsByRestaurantIdWithName(restaurantId, req.params.name);
    console.log(result);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});


// Get a menu item by ID
router.get('/api/menuItems/:menuItemId', async (req, res) => {
  try {
    const result = await menuItemService.getMenuItemById(req.params.menuItemId);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});

// Update a menu item
router.put('/api/menuItems/:menuItemId', async (req, res) => {
  try {
    const result = await menuItemService.updateMenuItem(req.params.menuItemId, req.body);
    if(result._id==req.body._id){
      res.json({result:true,message:'menu item updated'});
    }
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});

// Delete a menu item
router.delete('/api/menuItems/:menuItemId', async (req, res) => {
  try {
    const result = await menuItemService.deleteMenuItem(req.params.menuItemId);
    if(result.id ==  req.params.menuItemId){
      res.json({result:true,message:'menu item deleted'});
    }
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});

module.exports = router;
