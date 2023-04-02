import {EnterPageComponent} from './enter-page/enter-page.component';
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


@NgModule({
  declarations: [
    EnterPageComponent,
    PageComponent,
    BannerComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponet,
    NewsComponent,
    GoalComponent,
    PartnersComponent,
    BanishedComponent,
    ProjectsComponent
  ],
  imports: [
    PagesRoutingModule,
  ],
  providers: [],
  bootstrap: []
})
export class PagesModule { }
