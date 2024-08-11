'use strict';
const{
    Model
} = require('sequelize');
module.exports = (sequelize,DataTypes) => {
    class Airport extends Model {
        /**
         * Helper method for defining associations.
         * This method is not part of Sequelize lifecycle.
         * The `Models/index` file will call this method automatically
         */
        static associations(models){
            //define associations here
            this.belongsTo(models.City,{
                foreignKey: 'cityId',
                onDelete: 'CASCADE'
            });
        }
    }
    Airport.init({
        name:{
            type:DataTypes.STRING,
            allowNull: false
        },
        address: DataTypes.STRING,
        cityId:{ 
            type:DataTypes.INTEGER,
            allowNull:false}
    }, {
        sequelize,
        modelName: 'Airport',
    });
    return Airport;
}