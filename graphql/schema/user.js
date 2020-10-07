const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  code: {
    type: String
  },
  name: {
    type: String
  },
  password: {
    type: String
  },
  type: {
    type: Number
  },
  mobile_phone_no: {
    type: String
  },
  email: {
    type: String
  }

})

module.exports = UserSchema
