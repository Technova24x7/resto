const mongoose = require('mongoose');

const menuItemCategorySchema = new mongoose.Schema({

    restaurant_id:{ type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant' },
    name: { type: String , unique:true},
    discription:{type:String},
});

const menuItemCategory = mongoose.model('MenuItemCategory',menuItemCategorySchema);

module.exports = menuItemCategory;