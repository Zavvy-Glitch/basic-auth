'use strict';

const { sequelize } = require('./model')
const server  = require('./lib/server.js')
require('dotenv').config();

const PORT = process.env.PORT || 3000;

sequelize.sync()
  .then(() => {
    server.start(PORT)
  })
