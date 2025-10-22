const  MenuItemCategory  = require('../models/menuitemcategory');

class MenuItemCategoryRepo{

    async createMenu(menuDetails){
        try {
            const menu = new MenuItemCategory(menuDetails);
            const result = await menu.save();
            
            return result;
            
        } catch (error) {

            return error;
            
        }
    }

    async getMenu(restaurant_id){
        try {
            const result = await MenuItemCategory.find({restaurant_id:restaurant_id});
            return result;
        } catch (error) {
            return error;
        }
    }   

    async getMenuById(menu_id){
        try {
            const result = await MenuItemCategory.find({_id:menu_id});
            return result;
        } catch (error) {
            return error;
        }
    }
    

    async deleteMenu(menu_id){
        try {
            const result = await MenuItemCategory.findByIdAndDelete(menu_id);
            return result;
        } catch (error) {
            return error;
        }
    }

    async updateMenu(menu_id,menuDetails){
        try {
            const result = await MenuItemCategory.findByIdAndUpdate(menu_id,menuDetails);
            return result;
        } catch (error) {
            return error;
        }
    }


}

module.exports = MenuItemCategoryRepo;