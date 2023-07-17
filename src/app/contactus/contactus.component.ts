import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  [x: string]: any;
  getHome(){
    alert("Thanks")
  }
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  

 
}
