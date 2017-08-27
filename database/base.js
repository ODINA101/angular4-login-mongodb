exports.cre = () => {
    const url = "mongodb://localhost:27017/data";
    const mongodb = require('mongodb').MongoClient;
     
     mongodb.connect(url,(err,db)=>{
         console.log(err ? 'error in mongodb connect':'');
         db.createCollection('users',(err,res)=>{
             console.log(err ? 'error in base creating':'');
         });
     });

}
 
