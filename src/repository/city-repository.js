const {City} = require('../models/index');

class CityRepository{
    async createCity({name}){
        try{
            const city = await City.create({name});
            return city;
        } catch(error){
            throw{error};
        }
    }

    async deleteCity({cityId}){
        try{
            await City.destroy({
                where:{
                    id:cityId
                }
            });
        } catch(error){
            throw{error};
        }
    }

    async updateCity(CityId,data){
        try {
            const city = await City.update(data,{
                where:{
                    id:CityId
                }
            });
            return city;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

    async getCity(CityId){
        try{
            const city = await City.findByPk(CityId);
            return City;
        }
        catch(error){
            console.log("Something went wrong in the repository layer");
            throw{error};
        }
    }

    async getAllCities(){
        try {
            const cities = await City.findAll();
            return cities;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw{error};
        }
    }
}

module.exports  = CityRepository;

