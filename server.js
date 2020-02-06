var express = require('express');
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');
const {
    getUser,
    retrieveUsers
} = require("./user");


// Initialize a GraphQL schema
var schema = buildSchema(`
  type Query {
    hello: String
    user(id: Int!): Person
    users(gender: String): [Person]
  },
  type Person {
    id: Int
    name: String
    age: Int
    gender: String  
  }
`);

// Root resolver
var root = {
    hello: () => 'Hello world!',
    user: getUser,   // Resolver function to return user with specific id
    users: retrieveUsers
};

// Create an express server and a GraphQL endpoint
var app = express();
app.use('/graphql', graphqlHTTP({
    schema: schema,  // Must be provided
    rootValue: root,
    graphiql: true,  // Enable GraphiQL when server endpoint is accessed in browser
}));

app.get('/', function (req, res) {
   res.send('Welcome');
});


app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));