import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {EnterPageComponent} from "../pages/enter-page/enter-page.component";
import {PageComponent} from "../pages/main-page/page.component";
import {HomeComponent} from "../pages/home/HomeComponent";


export  const routes: Routes =
  [
    {
      path: '', component: PageComponent
    }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes,  { useHash: false , anchorScrolling: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
