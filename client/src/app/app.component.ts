import { Component } from '@angular/core';
import * as io from 'socket.io-client';
import { Router } from "@angular/router";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  socket = io('');
  constructor(public router:Router){
    this.socket.on('registered',()=>{
this.router.navigate(['']);
    });
    

  }
  
}
