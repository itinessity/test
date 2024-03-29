import { OwlOptions } from 'ngx-owl-carousel-o';
import { Component } from "@angular/core";
@Component({
  selector: 'carousel-news-main',
  templateUrl: './carousel-holder.component.html',
  styleUrls: ['./gallery.css']
})
export class CarouselHolderComponent {
  customOptions: OwlOptions = {
    loop: true,
    margin: 1,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
}
