const express = require('express')
const router = express.Router()
const { getAllProductsFromStore } = require('../controllers/storeControllers')

router.route('/').get(getAllProductsFromStore)

module.exports = router
