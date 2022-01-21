// Import Objection Models Here!
const Author = require('../../models/Author');

const addAuthor = async (obj, { input }, context) => {
    return await Author.query().insert(input);
}

// This resolver object mirrors the shape of your TypeDefs
const resolver = {
  Mutation: { 
      addAuthor
   },
}

module.exports = resolver