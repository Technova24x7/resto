const express = require('express');
const router = express.Router();

const MenuItemCategoryService  = require("../services/menuItemCategoryService");

const menuItemCategoryService = new MenuItemCategoryService();


router.post('/api/menu',async function(req,res){

    try {
        const menu = req.body;
        menu.restaurant_id = req.session.restaurant._id;
        const result = await menuItemCategoryService.addMenu(req.body);
        if(result.name == menu.name){
            res.json({result: true , message: "Menu added successfully"});
        }
    } catch (error) {
        console.log(error);
    }
});

router.get('/api/menu',async function(req,res){
    try {
        const result = await menuItemCategoryService.getMenu(req.session.restaurant._id);
        res.json(result);
    }
    catch(error){
        console.log(error);
    }
});

router.get('/api/menu/:id',async function(req,res){
    try {
        const result = await menuItemCategoryService.getMenuById(req.params.id);
       
        res.json(result);
    } catch (error) {
        console.log(error);
    }
});


router.delete('/api/menu/:id',async function(req,res){
    try {
        const result = await menuItemCategoryService.deleteMenu(req.params.id);
        if(result._id==req.params.id){
            res.json({result:true,message:"Menu deleted successfully"});
        }

    } catch (error) {
        console.log(error);
    }
});

router.put('/api/menu',async function(req,res){
    try {
        const result = await menuItemCategoryService.upadateMenu(req.body._id,req.body);
        if(result._id==req.body._id){
            res.json({result:true,message:"Menu updated successfully"});
        }
    } catch (error) {
        console.log(error);
    }
});


module.exports = router;