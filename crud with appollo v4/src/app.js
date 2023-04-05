const express = require('express')
const app = express();
const { ApolloServer } = require('@apollo/server')
const { startStandaloneServer } = require('@apollo/server/standalone')
require('dotenv').config()
const typeDefs= require('./schema/typeDefs')
const resolvers = require('./schema/resolvers')

require('./connection/db')

const server = new ApolloServer({
    typeDefs,
    resolvers
})

const serverstart = startStandaloneServer(server, {
    listen: { port: process.env.PORT }
})
serverstart.then((server) => {
    console.log(`started server at : ${server.url}`)
}).catch(err => console.log(err.message))




module.exports = server