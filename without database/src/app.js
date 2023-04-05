const express = require('express')

const app = express()

const {ApolloServer} = require('@apollo/server')

const {startStandaloneServer} = require('@apollo/server/standalone')

require('dotenv').config()

const typeDefs = require('./schema/typedefs')

const resolvers = require('./schema/resolver')

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context : {
        sayHello : ()=>console.log('hiii')
    }
})

const startserver = startStandaloneServer(server,{
    listen :{port : process.env.PORT}
})

startserver.then((server)=>{
    console.log(`server starts at ${server.url}`)
})