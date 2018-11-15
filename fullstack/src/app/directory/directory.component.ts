import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../logging.service'; 
import axios from 'axios';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {
  projects = [
    {name: 'project1'},
    {name: 'project2'},
    {name: 'project3'}
  ]

  constructor(private logger: LoggingService) {

   }
   logIt(){
    this.logger.log();
  }

  ngOnInit() {
    axios.get('http://localhost:8069').then((data)=>{
      console.log(data);
    })
    console.log('hi!')
  }

}
