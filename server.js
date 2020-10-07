const express = require('express')
const config = require('config')
const GraphQLHTTP = require('express-graphql')

const connectDB = require('./mongoose-connect')
const graphql = require('./graphql')

const PORT = config.get('app.port') || 5000
connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/test', (req, res) => { res.send('API Running !!!') })
app.use('/graphql', GraphQLHTTP({
  graphiql: true,
  schema: graphql,
  rootValue: graphql
}))

app.listen(PORT, () => {
  console.log(`Server Startd on Port ${PORT}`)
})
