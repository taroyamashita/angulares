import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  highlight = 'Test Highlight'

  constructor() { }

  ngOnInit() {
  }

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

 eventFromInner(passed){
   console.log(passed);
   this.highlight = passed.ProjectTitle;
 }

}
