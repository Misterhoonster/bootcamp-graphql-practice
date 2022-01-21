// Import Objection Models Here!
const Address = require('../../models/Address');

const addAddress = async (obj, { input }, context) => {
    return await Address.query().insert(input);
}

// This resolver object mirrors the shape of your TypeDefs
const resolver = {
  Mutation: { 
      addAddress
   },
}

module.exports = resolver
