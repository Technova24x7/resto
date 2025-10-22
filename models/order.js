const mongoose = require('mongoose');

// Order Schema
const orderSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    restaurant_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant' },
    table_number: { type: Number },
    items: [
      {
        menuItemId: { type: mongoose.Schema.Types.ObjectId, ref: 'MenuItem' },
        menuItemName:{type:String},
        price:{type:Number},
        quantity: { type: Number }
      }
    ],
    status: { type: String },
    total: { type: Number },
    timestamp: { type: Date, default: Date.now }
  });

  const Order = mongoose.model('Order', orderSchema);

  module.exports = Order;