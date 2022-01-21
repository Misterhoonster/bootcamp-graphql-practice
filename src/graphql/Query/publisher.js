// Import Objection Models Here!
const Publisher = require('../../models/Publisher');
const Address = require('../../models/Address');

const getAllPublishers = async (obj, args, context) => {
    return Publisher.query().select();
}

const getPublisherById = async (obj, { id }, context) => {
    return Publisher.query().findOne("id", id);
};

const address = async (parent) => {    
    const a = await Address.query().findOne('id', parent.addressId);
    return a;
}


// This resolver object mirrors the shape of your TypeDefs
const resolver = {
  Query: { 
      getAllPublishers: getAllPublishers,
      getPublisherById: getPublisherById,
   },
  Publisher: {
      address
  }
}

module.exports = resolver
