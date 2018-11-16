import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Taro Yamashita';
  projects = [  
    {  
       "ProjectTitle":"Title of Project1",
       "Description":"Description of Project1",
       "Tags":"Tags for Project1"
    },
    {  
       "ProjectTitle":"Title of Project2",
       "Description":"Description of Project2",
       "Tags":"Tags for Project2"
    },
    {  
       "ProjectTitle":"Title of Project 1",
       "Description":"Description of Project1",
       "Tags":"Tags for Project3"
    }
 ]
}
