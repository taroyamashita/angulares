import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeTitle = "Welcome Home";
  @Input() project; 
  @Output() onYell= new EventEmitter();

  fireYellEvent(e){
    this.onYell.emit(e);
  }
  constructor() { }

  ngOnInit() {
  }

}
