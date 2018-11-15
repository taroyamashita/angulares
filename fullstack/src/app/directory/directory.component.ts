import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
