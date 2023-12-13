import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.html',
  styleUrls: ['./menu.css']
})
export class MenuComponent implements  OnInit{
  title = 'Menu';
  activatedRoute: ActivatedRoute;

  constructor(route: ActivatedRoute) {
    this.activatedRoute = route;
  }

  ngOnInit(): void {
  }
}
