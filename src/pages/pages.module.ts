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
import {BanishedComponent} from "./projects/banished/BanishedComponent";
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
    ProductsComponent
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
    MatTabsModule
  ],
  providers: [],
  bootstrap: []
})
export class PagesModule { }
