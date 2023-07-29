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
          path: 'goal', component: GoalComponent,
        },
        {
          path: 'home', component: HomeComponent,
        },
        {
          path: 'projects', component: ProjectsComponent,
        },
        {
          path: 'projects/banished', component: BanishedComponent,
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
    ]}
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
