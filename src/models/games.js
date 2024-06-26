'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Games extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Games.init({
    Name: DataTypes.STRING,
    idCatogory : DataTypes.INTEGER,
    UrlImage : DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Games',
  });
  return Games;
};