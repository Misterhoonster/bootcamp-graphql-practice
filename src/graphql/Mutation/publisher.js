// Import Objection Models Here!
const Publisher = require('../../models/Publisher');

const addPublisher = async (obj, { input }, context) => {
    return await Publisher.query().insert(input);
}

// This resolver object mirrors the shape of your TypeDefs
const resolver = {
  Mutation: { 
      addPublisher
   },
}

module.exports = resolver