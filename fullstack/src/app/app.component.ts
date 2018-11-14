import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Taro is amazing!';
  position = "Fullstack engineer";
  project = {
    title: "title1!",
    description: "description1"
  };

  yell(e){
    alert('I am yelling!')
  }
}
