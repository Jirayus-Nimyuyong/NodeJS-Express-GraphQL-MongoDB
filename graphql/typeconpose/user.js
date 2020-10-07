const { composeWithMongoose } = require('graphql-compose-mongoose')
const customizationOptions = {}
const user = require('../model/user')

const UserTC = composeWithMongoose(user, customizationOptions)

module.exports = UserTC
