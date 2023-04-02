import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-foot',
  templateUrl: './foot.html',
  styleUrls: ['./foot.css']
})

export class FooterComponet implements  OnInit{
  get CurrentDate(): Date {
    return <Date>this._CurrentDate;
  }

  set CurrentDate(value: Date) {
    this._CurrentDate = value;
  }
  title = 'Footer';
  activatedRoute: ActivatedRoute;
  private _CurrentDate: Date | undefined;

  constructor(route: ActivatedRoute) {
    this.activatedRoute = route;
  }

  ngOnInit(): void {
    this._CurrentDate = new Date();
  }
}

