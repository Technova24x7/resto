const express = require('express');
const UserService = require('../services/userService');
const AuthenticationService = require('../services/authenticationService');
const RestaurantService = require('../services/restaurantService');

const router = express.Router();
const userService = new UserService();
const authenticationService = new AuthenticationService();
const restaurantService = new RestaurantService();

// Create a new user
router.post('/api/users/signup', async (req, res) => {
  try {
    let user = req.body;
    user.role = 'admin';
    const result = await userService.createUser(user);
    if(user.phoneno == result.phoneno){
      res.json({result:true,message:"sign up success"});
    }else   if(result.code==11000){
      res.json({result:false,message:'acc already exist'});
    }
    
  } catch (error) {
    
  
    res.status(500).json({ error: 'An error occurred' });
  }
});

// user signin 
router.post('/api/users/signin', async (req,res)=>{
  try {
    let user = req.body;
    const userDetails = await userService.getUserByPhoneNo(user.phoneno);
    const restaurantDetails = await restaurantService.getRestaurantByAdminId(userDetails[0]._id);
    
    console.log(restaurantDetails);

    if(userDetails[0].password == user.password){
      req.session.user = userDetails[0];
      req.session.restaurant = restaurantDetails[0];
      console.log(req.session);
      res.json({result:true,message:'authenticated'});
    }
    else{
      res.json({result:false,message:'unauthorised'});
    }
  } catch (error) {
    res.status(500).json({error:'An error occured'});
  }
});

// user signout 
router.get('/api/users/signout', async (req, res) => {
  try {
    await req.session.destroy();
    res.json({ result:true ,message: 'User signed out successfully.' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'An error occurred during sign out.' });
  }
});
// Get a user by ID
router.get('/api/users', async (req, res) => {

  try {
    
    const result = await userService.getUserById(req.session.user._id);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});

// Update a user
router.put('/api/users', async (req, res) => {
  try {
    const result = await userService.updateUser(req.session.user._id, req.body);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});

// Delete a user
router.delete('/api/users', async (req, res) => {
  try {
    const result = await userService.deleteUser(req.session.user._id);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});

module.exports = router;
