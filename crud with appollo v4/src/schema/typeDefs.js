const { gql } = require('graphql-tag')

const typeDefs = gql`

type Player {
    id : ID!
    playername : String!
    position : String!
    country : String!
    isDeleted : Boolean
}

type Query {
    getPlayers : [Player]
    getPlayer(id : ID!): Player
}

type Mutation{
    addPlayer(playername : String!,position : String!,country : String!,isDeleted : Boolean):Player
    updatePlayer(id:String!,playername : String!,position : String!,country : String!):Player
    deletePlayer(id : String!,isDeleted : Boolean) : Player
}`

module.exports = typeDefs