'use strict';

/**@type {import('sequelize-cli').Migration} */
module.exports = {
    async up (queryInterface,Sequelize){
        /**
         * Add send commands here
         * 
         * Example:
         * await queryInterface.bulkInsert('people',[{
         * name:'John Doe',
         * isBetaMember: false}],{});
         */
        await queryInterface.bulkInsert('Airports',[
            {
               name:'Kompegowda International Airport',
               cityId: 9,
               createdAt:new Date(),
               updatedAt: new Date()
            },
            {
                name:'Mysuru Airport Airport',
                cityId: 9,
                createdAt:new Date(),
                updatedAt: new Date()
             },
             {
                name:'Mangaluru International Airport',
                cityId: 9,
                createdAt:new Date(),
                updatedAt: new Date()
             },
             {
                name:'Indira Gandhi International Airport',
                cityId: 6,
                createdAt:new Date(),
                updatedAt: new Date()
             },
        ],{});
    },

    async down(queryInterface,Sequelize){
        /**
         * Add commands to revert seed here
         * 
         * Example:
         * await queryInterface.bulkDelete('People),null,{});
         */
    }
};