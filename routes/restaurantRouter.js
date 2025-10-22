const express = require('express');
const RestaurantService = require('../services/restaurantService');
const AuthenticationService = require('../services/authenticationService');

const router = express.Router();
const restaurantService = new RestaurantService();
const authenticationService = new AuthenticationService();

// Create a new restaurant
router.post('/api/restaurants', async (req, res) => {
  try {
    let userId = req.session.user._id;
    console.log(userId);   

    let restaurantDetails = req.body;

    restaurantDetails.admin_id = userId;

    const result = await restaurantService.createRestaurant(restaurantDetails);
    if(req.body.phone == result.phone){
      res.json({result:true,message:'restaurant details saved'});
    }
    
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});

//get resturant by userid 
router.get('/api/restaurants/admin/:adminid' , async(req,res)=>{
  try {
    const result = await restaurantService.getRestaurantByAdminId(req.params.adminid);
    res.json(result[0]);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});

// Get a restaurant by ID
router.get('/restaurants/:restaurantId', async (req, res) => {
  try {
    const result = await restaurantService.getRestaurantById(req.params.restaurantId);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});

// Update a restaurant
router.put('/restaurants/:restaurantId', async (req, res) => {
  try {
    const result = await restaurantService.updateRestaurant(req.params.restaurantId, req.body);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});

// Delete a restaurant
router.delete('/restaurants/:restaurantId', async (req, res) => {
  try {
    const result = await restaurantService.deleteRestaurant(req.params.restaurantId);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});

module.exports = router;
