const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');

class Steaming extends Model {}

Steaming.init({
  // Model attributes are defined here
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING
    
  }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'Steaming' // We need to choose the model name
});

module.exports = Steaming
