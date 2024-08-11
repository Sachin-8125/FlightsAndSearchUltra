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
        this.hasMany(models.Airport,{
            foreignKey: 'cityId'

        });
       }
    }
    City.init({
        name:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    },

    },{
        sequelize,
        modelName : 'City',
    });
    return City;
};