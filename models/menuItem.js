const mongoose = require('mongoose');


// MenuItem Schema
const menuItemSchema = new mongoose.Schema({
    restaurant_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant' },
    name: { type: String , unique:true},
    description: { type: String },
    type:{type:String},
    menuItemCategoryId:{type:String},
    price: { type: Number },
    stock:{type:String},
    image: {
      type: Buffer, // Store image binary data
      
    },
  });

const MenuItem = mongoose.model('MenuItem', menuItemSchema);

module.exports = MenuItem;