import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-pages-home',
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event']) onScrollEvent() {
    let overlay = document.querySelector('.overlay') as HTMLElement;
    let overlay_content = document.querySelector('.overlay-content') as HTMLElement;

    if (window.scrollY > 250) {
      overlay.style.opacity = '1';
      overlay_content.style.opacity = '1';
    } else {
      overlay.style.opacity = '0';
      overlay_content.style.opacity = '0';
    }
  }
}


