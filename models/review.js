const mongoose = require('mongoose');

// Review Schema
const reviewSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    restaurant_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant' },
    rating: { type: Number },
    comment: { type: String }
  });

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;