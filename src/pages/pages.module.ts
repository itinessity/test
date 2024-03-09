import {NgModule} from '@angular/core';
import {PageComponent} from './main-page/page.component';
import {PagesRoutingModule} from './pages.routing';
import {BannerComponent} from "./banner/banner";
import {HomeComponent} from "./home/HomeComponent";
import {NavbarComponent} from "./menu/nav";
import {FooterComponet} from "./foot/foot";
import {NewsComponent} from "./news/NewsComponent";
import {GoalComponent} from "./goal/GoalComponent";
import {PartnersComponent} from "./partners/PartnersComponent";
import {BanishedComponent} from "./banished/BanishedComponent";
import {ProjectsComponent} from "./projects/ProjectsComponent";
import {TermsComponent} from "./terms/TermsComponent";
import {PolicyComponent} from "./policy/PolycyComponent";
import {HeaderComponent} from "./header/head";
import {MenuComponent} from "./second-menu/menu";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {EmailSubscribeForm} from "./subscribe/subscribe.component";
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from "@angular/material/button";
import {MatDividerModule} from "@angular/material/divider";
import {CarouselModule} from "ngx-owl-carousel-o";
import {CarouselHolderComponent} from "./gallery/gallery.component";
import {MatTooltipModule} from "@angular/material/tooltip";
import {NewsItem1Component} from "./news/items/item1";
import {MatCardModule} from "@angular/material/card";
import {MusicComponent} from "./music/mucis";
import {ProductsComponent} from "./products/products";
import {MatTabsModule} from "@angular/material/tabs";
import {MatIconModule} from "@angular/material/icon";
import {CommonModule, NgIf} from "@angular/common";
import {NewsItem2Component} from "./news/items/item2";
import {NewsItem3Component} from "./news/items/items3";
import {Comics1Component} from "./projects/comics/comics1";
import {Film1Component} from "./banished/films/film1";
import {Product1Component} from "./products/list/item1";
import {Film2Component} from "./banished/films/film2";
import {Film3Component} from "./banished/films/film3";
import {Film4Component} from "./banished/films/film4";
import {Comics4Component} from "./projects/comics/comics4";
import {Comics3Component} from "./projects/comics/comics3";
import {Comics2Component} from "./projects/comics/comics2";
import {Comics5Component} from "./projects/comics/comics5";
import {Comics6Component} from "./projects/comics/comics6";
import {NewsItem4Component} from "./news/items/item4";



@NgModule({
  declarations: [
    PageComponent,
    BannerComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponet,
    NewsComponent,
    GoalComponent,
    PartnersComponent,
    BanishedComponent,
    ProjectsComponent,
    TermsComponent,
    PolicyComponent,
    HeaderComponent,
    MenuComponent,
    EmailSubscribeForm,
    CarouselHolderComponent,
    NewsItem1Component,
    MusicComponent,
    ProductsComponent,
    NewsItem2Component,
    NewsItem3Component,
    Comics1Component,
    Film1Component,
    Product1Component,
    Film2Component,
    Film3Component,
    Film4Component,
    Comics4Component,
    Comics3Component,
    Comics2Component,
    Comics5Component,
    Comics6Component,
    NewsItem4Component
  ],
  imports: [
    PagesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    CarouselModule,
    MatTooltipModule,
    MatCardModule,
    MatTabsModule,
    MatIconModule,
    CommonModule,
    NgIf
  ],
  providers: [],
  bootstrap: []
})
export class PagesModule { }
