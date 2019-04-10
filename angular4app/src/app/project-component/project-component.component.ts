import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-project-component',
  templateUrl: './project-component.component.html',
  styleUrls: ['./project-component.component.css']
})
export class ProjectComponentComponent implements OnInit {

  @Input() project:any;
  @Output() eventFromInner = new EventEmitter<string>()

  constructor() { }

  ngOnInit() {
  }

  projectClickHandler(){
    console.log(window)
    console.log('clicked');
    this.eventFromInner.emit(this.project);
  }

}
