import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {PageComponent} from "./main-page/page.component";
import {HomeComponent} from "./home/HomeComponent";
import {NewsComponent} from "./news/NewsComponent";
import {GoalComponent} from "./goal/GoalComponent";
import {PartnersComponent} from "./partners/PartnersComponent";
import {BanishedComponent} from "./projects/banished/BanishedComponent";
import {ProjectsComponent} from "./projects/ProjectsComponent";
import {TermsComponent} from "./terms/TermsComponent";
import {PolicyComponent} from "./policy/PolycyComponent";
import {NewsItem1Component} from "./news/items/item1";
import {ProductsComponent} from "./products/products";

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
          path: 'goals', component: GoalComponent,
        },
        {
          path: 'home', component: HomeComponent,
        },
        {
          path: 'comics', component: ProjectsComponent,
        },
        {
          path: 'movies', component: BanishedComponent,
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
    ]}
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
