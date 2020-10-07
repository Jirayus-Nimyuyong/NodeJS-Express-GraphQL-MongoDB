const rootResolverUsers = require('./user')
const rootResolverBooks = require('./book')

const rootQuerys = Object.assign({},
  rootResolverUsers,
  rootResolverBooks
)

module.exports = rootQuerys
