const Review  = require('../models/review');

class ReviewRepo {
  async createReview(reviewDetails) {
    try {
      const review = new Review(reviewDetails);
      const result = await review.save();
      return result;
    } catch (error) {
      return error;
    }
  }

  async getReviewById(reviewId) {
    try {
      const result = await Review.findById(reviewId);
      return result;
    } catch (error) {
      return error;
    }
  }

  async updateReview(reviewId, reviewUpdates) {
    try {
      const result = await Review.findByIdAndUpdate(reviewId, reviewUpdates, { new: true });
      return result;
    } catch (error) {
      return error;
    }
  }

  async deleteReview(reviewId) {
    try {
      const result = await Review.findByIdAndDelete(reviewId);
      return result;
    } catch (error) {
      return error;
    }
  }
}

module.exports = ReviewRepo;
