import { Injectable } from '@angular/core';
import axios from 'axios'; 

@Injectable()
export class LoggingService {
  log(){
    console.log('I am a loggin service');
    axios.get('http://localhost:8069').then((data)=>{
      console.log(data.data);
    }).catch((err)=>{
      console.log(err);
    })
  }

  constructor() { }

}
