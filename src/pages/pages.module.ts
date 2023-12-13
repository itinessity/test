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
    MenuComponent
  ],
  imports: [
    PagesRoutingModule,
  ],
  providers: [],
  bootstrap: []
})
export class PagesModule { }
