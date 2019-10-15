'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
    return queryInterface.bulkInsert('pages', [
      {
        page: 1,
        image: "https://www.forbes.com/sites/joanmacdonald.jpg",
        from: 6,
        createdAt: new Date(),
        updatedAt : new Date()
      },
      {
        page: 2,
        image: "https://www.forbes.com/sites/joanmacdonald.jpg",
        from: 6,
        createdAt: new Date(),
        updatedAt : new Date()
      },
      {
        page: 3,
        image: "https://www.forbes.com/sites/joanmacdonald.jpg",
        from: 6,
        createdAt: new Date(),
        updatedAt : new Date()
      }], {});


  },

  down: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkDelete('pages', null, {});
  
  }
};