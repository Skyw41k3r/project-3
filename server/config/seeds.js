const db = require('./connection');
const { ArtCard, User } = require('../models');


db.once('open', async () => {
    
    await ArtCard.deleteMany();
  
    const artcards = await ArtCard.insertMany([
      {
        image: 'stand in',
        title: 'An Imaginary piece of art',
        description: 'Whatever you can imagine',
        price: '13.13'
      },
      {
        image: 'stand in',
        title: 'An Imaginary piece of art',
        description: 'Whatever you can imagine',
        price: '13.13'
      },
      {
        image: 'stand in',
        title: 'An Imaginary piece of art',
        description: 'Whatever you can imagine',
        price: '13.13'
      },
      {
        image: 'stand in',
        title: 'An Imaginary piece of art',
        description: 'Whatever you can imagine',
        price: '13.13'
      },
    ]);
  
    console.log('Art Cards seeded');
  
    await User.deleteMany();
  
    await User.create({
      username: 'GotrekGurnison',
      email: 'seekingdoom@dwarfmail.com',
      password: 'dwarvesloveale88',
      artcards: []
      
    });
  
    await User.create({
      username: 'ThorgrimGrudgebearer',
      email: 'highking@dwarfmail.com',
      password: 'thatsgoinginthebook',
    });
  
    console.log('users seeded');
  
    process.exit();
  });
  