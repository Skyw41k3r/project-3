const db = require('./connection');
const { ArtCard, User } = require('../models');


db.once('open', async () => {
    
    await User.deleteMany();
  
    await User.create({
      username: 'GotrekGurnison',
      email: 'seekingdoom@dwarfmail.com',
      password: 'onedwarf',
    });
  
    await User.create({
      username: 'ThorgrimGrudgebearer',
      email: 'highking@dwarfmail.com',
      password: 'twodwarf',
    });

    await User.create({
      username: 'Test',
      email: 'test@email.com',
      password: 'password1',
    });
  
    console.log('users seeded');
  
    process.exit();
  });
  