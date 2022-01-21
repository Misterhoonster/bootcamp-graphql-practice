// Import Objection Models Here!
const Author = require('../../models/Author');
const Address = require('../../models/Address')

const getAllAuthors = async () => {
    return Author.query().select();
}

const getAuthorById = async (_, { id }, __) => {
    return Author.query().findOne("id", id);
};

const address = async (parent) => {    
    const a = await Address.query().findOne('id', parent.addressId);
    return a;
}


// This resolver object mirrors the shape of your TypeDefs
const resolver = {
  Query: { 
      getAllAuthors: getAllAuthors,
      getAuthorById: getAuthorById,
   },
   Author: {
       address
   }
}

module.exports = resolver
