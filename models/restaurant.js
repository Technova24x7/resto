const mongoose = require('mongoose');

// Restaurant Schema
const restaurantSchema = new mongoose.Schema({
    name: { type: String },
    discription:{type:String},
    address: { type: String },
    state:{type:String},
    city:{type:String},
    phone: { type: String , unique:true},
    admin_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    tables: [
      {
        tableNumber: { type: Number },
        capacity: { type: Number }
      }
    ]
  });

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;