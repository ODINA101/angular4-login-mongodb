import { Component, OnInit } from '@angular/core';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {
  port = 8000;
 socket = io('');
  constructor() {
   }




  ngOnInit() {
  }
  email = "";
  pass = "";
  
  
    login(data) {
      this.socket.emit('user-reg',data);
  console.log(data);
  
      this.email = "";
      this.pass = "";
    }
  
}
