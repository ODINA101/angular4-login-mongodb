import { Component, OnInit } from '@angular/core';
import * as io from 'socket.io-client';
import {MdSnackBar} from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  port = 8000;
  socket = io('');
  constructor(public MdSnackBar:MdSnackBar) {
    this.socket.on('login-success',()=>{
      this.MdSnackBar.open('login success','success',{
        duration:2000,
              });
    });
    
    this.socket.on('login-failed',()=>{
      this.MdSnackBar.open('Email or password is wrong','error',{
duration:2000,
      });

    });


   }

  ngOnInit() {
  }


email = "";
pass = "";


  login(data) {
console.log(data);
this.socket.emit('user-login',data);

    this.email = "";
    this.pass = "";
  }

}
