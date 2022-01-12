const merge = require('lodash.merge')
const book = require('./book')
const author = require('./author')
const publisher = require('./publisher')
const address = require('./address')

const resolvers = [book, author, publisher, address]

module.exports = merge(...resolvers)
