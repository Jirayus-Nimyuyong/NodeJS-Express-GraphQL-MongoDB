const mongoose = require('mongoose')

const BookSchema = new mongoose.Schema({
  book_code: {
    type: String
  },
  book_name: {
    type: String
  }
})

module.exports = BookSchema
