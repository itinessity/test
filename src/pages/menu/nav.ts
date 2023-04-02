import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.html',
  styleUrls: ['./nav.css']
})
export class NavbarComponent implements  OnInit{
  title = 'NavBar';
  activatedRoute: ActivatedRoute;

  constructor(route: ActivatedRoute) {
    this.activatedRoute = route;
  }

  ngOnInit(): void {
  }
}

