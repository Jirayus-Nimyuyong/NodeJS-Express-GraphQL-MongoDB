const rootResolverUsers = require('./user')
const rootResolverBooks = require('./book')

const rootMutations = Object.assign({},
  rootResolverUsers,
  rootResolverBooks
)

module.exports = rootMutations
