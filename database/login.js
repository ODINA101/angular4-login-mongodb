'use strict';
exports.login = (email,pass) =>{
const mongodb = require('mongodb').MongoClient;
const server = require('../server');
const url = "mongodb://localhost:27017/data";


mongodb.connect(url,(err,db)=>{
    console.log(err ? 'error in login':'');
    db.collection('users').find({email:email,pass:pass}).sort({}).toArray((err,result)=>{
        console.log(result.length);
        if(result.length > 0) {
            server.module.emit('login-success');
        }else{
              server.module.emit('login-failed');
        }

        if(err) {
            console.log(err);
        }
    });

});



}