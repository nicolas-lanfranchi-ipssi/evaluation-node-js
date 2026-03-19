const mongoose = require('mongoose');
require('dotenv').config();
const { Sequelize } = require('sequelize');
const isDev = process.env.ENV === 'DEV';
const DB_url = isDev ? process.env.DB_DEV : process.env.DB_PROD;
const dialect = isDev ? 'mysql' : 'postgres';

const connection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB);
    console.log('connecté a mongo');
  } catch (error) {
    console.log('erreur de connexion');
    console.log(error);
  }
};

const sequelize = new Sequelize(DB_url, {
  dialect,
  protocol: dialect,
  dialectOptions:
    dialect === 'postgres'
      ? {
          ssl: {
            require: true,
            rejectUnauthorized: false,
          },
        }
      : {},
});

module.exports = { connection, sequelize };