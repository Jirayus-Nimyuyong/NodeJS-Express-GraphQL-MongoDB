const BookTC = require('../typeconpose/book')

const rootResolverBooks = {
  bookCreateOne: BookTC.getResolver('createOne'),
  bookCreateMany: BookTC.getResolver('createMany'),
  bookUpdateById: BookTC.getResolver('updateById'),
  bookUpdateOne: BookTC.getResolver('updateOne'),
  bookUpdateMany: BookTC.getResolver('updateMany'),
  bookRemoveById: BookTC.getResolver('removeById'),
  bookRemoveOne: BookTC.getResolver('removeOne'),
  bookRemoveMany: BookTC.getResolver('removeMany')
}
module.exports = rootResolverBooks
