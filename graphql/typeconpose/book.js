const { composeWithMongoose } = require('graphql-compose-mongoose')
const customizationOptions = {}
const book = require('../model/book')

const BookTC = composeWithMongoose(book, customizationOptions)

module.exports = BookTC
