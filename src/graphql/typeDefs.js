const { gql } = require('apollo-server-express')

module.exports = gql`
  type Query {
    getAllBooks: [Book!]!
    getBookById (id: ID!): Book!
    getAllAuthors: [Author!]!
    getAuthorById (id: ID!): Author!
    getAllPublishers: [Publisher!]!
    getPublisherById (id: ID!): Publisher!
    getAllAddresses: [Address!]!
    getAddressById: Address!
  }
  type Mutation {
    addBook (input: addBookInput!): Book!
    addAuthor (input: addAuthorInput!): Author!
    addPublisher (input: addPublisherInput!): Publisher!
    addAddress (input: addAddressInput!): Address!
  }
  type Address {
    id: ID!
    street: String!
    city: String!
    state: String!
    zip: Int!
  }
  input addAddressInput {
    street: String!
    city: String!
    state: String!
    zip: Int!
  }
  type Publisher {
    id: ID!
    company: String!
    phoneNumber: String
    numBooksPublished: Int
    address: Address
  }
  input addPublisherInput {
    company: String!
    phoneNumber: String
    numBooksPublished: Int
  }
  type Author {
    id: ID!
    firstName: String!
    lastName: String!
    age: Int
    email: String
    numBooksPublished: Int
    address: Address
  }
  input addAuthorInput {
    firstName: String!
    lastName: String!
    age: Int
    email: String
    numBooksPublished: Int
  }
  type Book {
    id: ID!
    title: String!
    language: String!
    numPages: Int
    datePublished: String
    bestseller: Boolean
    author: Author!
    publisher: Publisher!
  }
  input addBookInput {
    title: String!
    language: String!
    numPages: Int
    datePublished: String
    bestseller: Boolean
  }
`
