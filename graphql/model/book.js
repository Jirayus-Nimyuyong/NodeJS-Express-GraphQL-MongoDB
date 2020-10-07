const mongoose = require('mongoose')

const Schema = require('../schema/book')

module.exports = mongoose.model('book', Schema)
