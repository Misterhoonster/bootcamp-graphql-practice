// Import Objection Models Here!
const Book = require('../../models/Book');

const addBook = async (obj, { input }, context) => {
    return await Book.query().insert(input);
}

// This resolver object mirrors the shape of your TypeDefs
const resolver = {
  Mutation: { 
      addBook
   },
}

module.exports = resolver