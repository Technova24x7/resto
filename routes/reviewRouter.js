const express = require('express');
const ReviewService = require('../services/reviewService');

const router = express.Router();
const reviewService = new ReviewService();

// Create a new review
router.post('/reviews', async (req, res) => {
  try {
    const result = await reviewService.createReview(req.body);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});

// Get a review by ID
router.get('/reviews/:reviewId', async (req, res) => {
  try {
    const result = await reviewService.getReviewById(req.params.reviewId);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});

// Update a review
router.put('/reviews/:reviewId', async (req, res) => {
  try {
    const result = await reviewService.updateReview(req.params.reviewId, req.body);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});

// Delete a review
router.delete('/reviews/:reviewId', async (req, res) => {
  try {
    const result = await reviewService.deleteReview(req.params.reviewId);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});

module.exports = router;
