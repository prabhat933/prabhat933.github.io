import { Component, OnInit } from '@angular/core';

//This is Decorator

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
// this is class 

export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
