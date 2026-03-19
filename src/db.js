const mongoose = require('mongoose');

const connection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB);
    console.log('connecté a mongo');
  } catch (error) {
    console.log('erreur de connexion');
    console.log(error);
  }
};

module.exports = connection;