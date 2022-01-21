// Import Objection Models Here!
const Address = require('../../models/Address');

const getAllAddresses = async (obj, args, context) => {
    return Address.query().select();
}

const getAddressById = async (obj, { id }, context) => {
    return Address.query().findOne("id", id);
};


// This resolver object mirrors the shape of your TypeDefs
const resolver = {
  Query: { 
      getAllAddresses: getAllAddresses,
      getAddressById: getAddressById,
   },

}

module.exports = resolver
