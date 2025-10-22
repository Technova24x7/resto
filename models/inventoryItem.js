const mongoose = require('mongoose');

// InventoryItem Schema
const inventoryItemSchema = new mongoose.Schema({
    restaurant_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant' },
    name: { type: String },
    quantity: { type: Number },
    unit: { type: String },
    price:{type:Number},
    discription:{type:String}
  });

const InventoryItem = mongoose.model('InventoryItem', inventoryItemSchema);

module.exports  = InventoryItem;