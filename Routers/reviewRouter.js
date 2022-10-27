const express = require('express')
const reviewRouter = express.Router()
const {protectRoute,isAuthorised} = require('../controller/authcontroller')
const {getAllReviews,top3reviews,getPlanReviews,createReview,updateReview,deleteReview} = require('../controller/reviewController')
reviewRouter
.route('/all')
.get(getAllReviews)

reviewRouter
.route('/top3')
.get(top3reviews)

reviewRouter
.route('/:id')
.get(getPlanReviews)

reviewRouter.use(protectRoute)
reviewRouter
.route('/crud/:plan')
.post(createReview)

reviewRouter
.route('/crud/:id')
.post(updateReview)
.delete(deleteReview)

module.exports = reviewRouter





