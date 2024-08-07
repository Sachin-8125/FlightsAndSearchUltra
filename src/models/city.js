'use strict';
const{
    Model,
    DataTypes
} = require('sequelize');
module.exports = (sequelize,DataTypes) => {
    class City extends Model {
        /**
         * Helper method to define associations
         * this method is not a part of sequelize lifecycle.
         * The 'models/index will call this file automatically         
        */
       static asscociate(models){
        //define associations here
       }
    }
    City.init({
        name:{
        type:DataTypes.STRING,
        allowNull:false}

    },{
        sequelize,
        modelName : 'City',
    });
    return City;
};