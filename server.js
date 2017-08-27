'use strict';


const express = require('express');
const app = express();
const http = require('http');
const port = 8050;
const server = http.createServer(app).listen(port);
const io = require('socket.io')(server);
const mongodb = require('mongodb');
const register = require('./database/register');
const base = require('./database/base');
const login = require('./database/login');
app.use(express.static(__dirname + '/client/dist'));
console.log(`server is running on ${port}`);

base.cre();


io.sockets.on('connection',(socket)=>{



socket.on('user-reg',(data)=>{    
    register.reg(data.email,data.pass); 
});

socket.on('user-login',(data)=>{
    login.login(data.email,data.pass);
});


});
exports.module = io;