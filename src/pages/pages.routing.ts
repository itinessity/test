import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {PageComponent} from "./main-page/page.component";
import {HomeComponent} from "./home/HomeComponent";
import {NewsComponent} from "./news/NewsComponent";
import {GoalComponent} from "./goal/GoalComponent";
import {PartnersComponent} from "./partners/PartnersComponent";
import {BanishedComponent} from "./banished/BanishedComponent";
import {ProjectsComponent} from "./projects/ProjectsComponent";
import {TermsComponent} from "./terms/TermsComponent";
import {PolicyComponent} from "./policy/PolycyComponent";
import {NewsItem1Component} from "./news/items/item1";
import {ProductsComponent} from "./products/products";
import {NewsItem2Component} from "./news/items/item2";
import {NewsItem3Component} from "./news/items/items3";
import {Comics1Component} from "./projects/comics/comics1";
import {Film1Component} from "./banished/films/film1";
import {Product1Component} from "./products/list/item1";
import {Film2Component} from "./banished/films/film2";
import {Film3Component} from "./banished/films/film3";
import {Film4Component} from "./banished/films/film4";
import {Comics2Component} from "./projects/comics/comics2";
import {Comics3Component} from "./projects/comics/comics3";
import {Comics4Component} from "./projects/comics/comics4";

export  const routes: Routes =
  [
    {path: '', component: PageComponent,
      children: [
        {
          path: '', component: HomeComponent,
        },
        {
          path: 'news', component: NewsComponent,
        },
        {
          path: 'news/1', component: NewsItem1Component,
        },
        {
          path: 'news/2', component: NewsItem2Component,
        },
        {
          path: 'news/3', component: NewsItem3Component,
        },
        {
          path: 'goals', component: GoalComponent,
        },
        {
          path: 'home', component: HomeComponent,
        },
        {
          path: 'comics', component: ProjectsComponent,
        },
        {
          path: 'comics/1', component: Comics1Component,
        },
        {
          path: 'comics/2', component: Comics2Component,
        },
        {
          path: 'comics/3', component: Comics3Component,
        },
        {
          path: 'comics/4', component: Comics4Component,
        },
        {
          path: 'movies', component: BanishedComponent,
        },
        {
          path: 'movies/1', component: Film1Component,
        },
        {
          path: 'movies/2', component: Film2Component,
        },
        {
          path: 'movies/3', component: Film3Component,
        },
        {
          path: 'movies/4', component: Film4Component,
        },
        {
          path: 'partners', component: PartnersComponent,
        },
        {
          path: 'terms', component: TermsComponent,
        },
        {
          path: 'policy', component: PolicyComponent,
        },
        {
          path: 'products', component: ProductsComponent,
        },
        {
          path: 'products/1', component: Product1Component,
        },
    ]}
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
