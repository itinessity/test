import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './head.html',
  styleUrls: ['./head.css']
})
export class HeaderComponent implements  OnInit{
  title = 'Header';
  activatedRoute: ActivatedRoute;

  constructor(route: ActivatedRoute) {
    this.activatedRoute = route;
  }

  ngOnInit(): void {
  }
}
