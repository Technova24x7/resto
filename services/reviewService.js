const ReviewRepo = require('../repositories/reviewRepo');

class ReviewService {
  constructor() {
    this.reviewRepo = new ReviewRepo();
  }

  async createReview(reviewDetails) {
    try {
      const result = await this.reviewRepo.createReview(reviewDetails);
      return result;
    } catch (error) {
      return error;
    }
  }

  async getReviewById(reviewId) {
    try {
      const result = await this.reviewRepo.getReviewById(reviewId);
      return result;
    } catch (error) {
      return error;
    }
  }

  async updateReview(reviewId, reviewUpdates) {
    try {
      const result = await this.reviewRepo.updateReview(reviewId, reviewUpdates);
      return result;
    } catch (error) {
      return error;
    }
  }

  async deleteReview(reviewId) {
    try {
      const result = await this.reviewRepo.deleteReview(reviewId);
      return result;
    } catch (error) {
      return error;
    }
  }
}

module.exports = ReviewService;
