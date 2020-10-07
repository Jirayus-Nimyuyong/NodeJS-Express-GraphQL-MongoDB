const BookTC = require('../typeconpose/book')

const rootResolverBooks = {
  bookMany: BookTC.getResolver('findMany'),
  bookCount: BookTC.getResolver('count'),
  bookConnection: BookTC.getResolver('connection'),
  bookPagination: BookTC.getResolver('pagination')
}

module.exports = rootResolverBooks
