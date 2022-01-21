// Import Objection Models Here!
const Book = require('../../models/Book');
const Author = require('../../models/Author');
const Publisher = require('../../models/Publisher');

const getAllBooks = async (obj, args, context) => {
    return Book.query().select();
}

const getBookById = async (obj, { id }, context) => {
    return Book.query().findOne("id", id);
};

const author = async (parent) => {    
    const a = await Author.query().findOne('id', parent.authorId);
    return a;
}

const publisher = async (parent) => {    
    const p = await Publisher.query().findOne('id', parent.publisherId);
    return p;
}


// This resolver object mirrors the shape of your TypeDefs
const resolver = {
  Query: { 
      getAllBooks: getAllBooks,
      getBookById: getBookById,
   },
  Book: {
    author,
    publisher
  }
}

module.exports = resolver
