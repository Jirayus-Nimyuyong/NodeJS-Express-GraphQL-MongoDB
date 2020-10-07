const { schemaComposer } = require('graphql-compose')
const rootQuerys = require('./query/index')
const rootMutaions = require('./mutaion/index')

schemaComposer.Query.addFields(rootQuerys)
schemaComposer.Mutation.addFields(rootMutaions)

const graphqlSchema = schemaComposer.buildSchema()

module.exports = graphqlSchema
