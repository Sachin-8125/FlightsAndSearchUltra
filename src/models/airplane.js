'use strict';
const{
    Model
} = require('sequelize');
module.exports = (sequelize,DataTypes) => {
    class Airplane extends Model {
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
        modelNumber:{
            type:DataTypes.STRING,
            allowNull: false
        },
        capacity: {
            type:DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 200
        }
    }, {
        sequelize,
        modelName: 'Airplane',
    });
    return Airplane;
}