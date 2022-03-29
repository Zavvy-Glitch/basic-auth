'use strict';

require('dotenv').config();

const { Sequelize, DataTypes } = require('sequelize');
const userModel = require('./userModel.js')



const DATABASE_URL = process.env.NODE_ENV === 'test'
? 'sqlite::memory'
: process.env.DATABASE_URL
console.log(DATABASE_URL)

const sequelizeOptions = process.env.NODE === 'production' ? {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },

} : {}
const sequelize = new Sequelize(DATABASE_URL, sequelizeOptions)
const UserModel = userModel(sequelize, DataTypes);

module.exports = {
  sequelize,
  UserModel,
};