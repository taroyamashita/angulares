import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  name: any;
  sub: any;
  classes={'blue': true, 'red': false, 'underline':true}
  constructor(private route:ActivatedRoute) { };

 

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      console.log(params);
      this.name = params['name']
    })
  }


}
