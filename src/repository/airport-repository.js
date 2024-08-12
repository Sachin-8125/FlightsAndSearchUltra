const CrudRepository = require('./crud-repository');
const {Airport} = require('../models/index');

class AirportRepository extends CrudeRepository {
    constructor(){
        
        super(model);
    }
}

module.exports = AirportRepository;