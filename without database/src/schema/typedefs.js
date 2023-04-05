const {gql} = require('graphql-tag')

const typeDefs = gql`

type Query {
    products(filter : filterOnProduct) : [Product!]!
    categories : [Category!]!
    category(id : ID!):Category
    
}

type Product {
    id: ID!
    name : String!
    description : String!
    quantity : Int!
    price : Float!
    image : String!
    onSale : Boolean!
}

type Category {
    id : ID!
    name : String!
    products : [Product!]!
}

input filterOnProduct {
    onSale : Boolean
}
`

module.exports = typeDefs

