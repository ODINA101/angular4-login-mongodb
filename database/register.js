exports.reg = (email,pass) => {
    const url = "mongodb://localhost:27017/data";
    const mongodb = require('mongodb').MongoClient;
  const col = require('./base');
  const server = require('../server');

    mongodb.connect(url,(err,db)=>{

        db.collection('users').insert({email:email,pass:pass});
      server.module.emit('registered');
    });
 
     

}
 

