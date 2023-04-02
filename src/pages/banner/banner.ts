import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.html',
  styleUrls: ['./banner.css']
})
export class BannerComponent implements  OnInit {
  title = 'Cookie';
  activatedRoute: ActivatedRoute;

  constructor(route: ActivatedRoute) {
    this.activatedRoute = route;
  }

  ngOnInit(): void {
    const cookiecook = this.getCookie("showbannercoock");
      let cookiewin = document.getElementById('cookie-banner-main');
    if (cookiecook !== "no") {
      // @ts-ignore
      cookiewin.style.display = "block";
      // @ts-ignore
      document.getElementById("cookie_close").addEventListener("click", function() {
        // @ts-ignore
        cookiewin.style.display = "none";
        let date = new Date();
        date.setDate(date.getDate() + 30);
        document.cookie = "showbannercoock=no; path=/; expires=" + date.toUTCString();
      });
    } else
    {
      // @ts-ignore
      cookiewin.style.display = "none";
    }
  }


  private getCookie(name: string): string | undefined{
    const matches = document.cookie.match(new RegExp(
      '(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)'
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }

}
