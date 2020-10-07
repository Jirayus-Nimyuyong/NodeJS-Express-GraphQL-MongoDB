const UserTC = require('../typeconpose/user')

const rootResolverUsers = {
  userMany: UserTC.getResolver('findMany'),
  userCount: UserTC.getResolver('count'),
  userConnection: UserTC.getResolver('connection'),
  userPagination: UserTC.getResolver('pagination')
}

module.exports = rootResolverUsers
