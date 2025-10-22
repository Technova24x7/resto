const MenuItemCategoryRepo = require('../repositories/menuItemCategoryRepo');


class MenuItemCategoryService{

    constructor(){
        this.menuItemCategoryRepo = new MenuItemCategoryRepo();
    }

    async addMenu(menuDetails){

        try {
            const result = await this.menuItemCategoryRepo.createMenu(menuDetails);
            return result;
          } catch (error) {
            return error;
          }
    }

    async getMenu(restaurant_id){
        try {
            const result = await this.menuItemCategoryRepo.getMenu(restaurant_id);
            return result;
          } catch (error) {
            return error;
          }
    }

    async getMenuById(menu_id){

        try {
            const result = await this.menuItemCategoryRepo.getMenuById(menu_id);
            return result;
          } catch (error) {
            return error;
          }
    }

    async deleteMenu(menu_id){
        try {
            const result = await this.menuItemCategoryRepo.deleteMenu(menu_id);
            return result;
          } catch (error) {
            return error;
          }
    }

    async upadateMenu(id,menuDetails){
        try{
            const result = await this.menuItemCategoryRepo.updateMenu(id,menuDetails);
            return result;
        }
        catch(error){
            return error;
        }

    }
}

module.exports = MenuItemCategoryService;