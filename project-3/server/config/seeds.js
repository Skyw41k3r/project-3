const db = require('./connection');
const { ArtCard, User } = require('../models');


db.once('open', async () => {
    
    await ArtCard.deleteMany();
  
    await ArtCard.create([
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
      firstName: 'Gotrek',
      lastName: 'Gurnison',
      email: 'seekingdoom@dwarfmail.com',
      password: 'dwarvesloveale88',
      
    });
  
    await User.create({
      firstName: 'Thorgrim',
      lastName: 'Grudgebearer',
      email: 'highking@dwarfmail.com',
      password: 'thatsgoinginthebook',
    });
  
    console.log('users seeded');
  
    process.exit();
  });
  