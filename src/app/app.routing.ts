import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {EnterPageComponent} from "../pages/enter-page/enter-page.component";


export  const routes: Routes =
  [
    {
      path: '', component: EnterPageComponent
    }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes,  { useHash: false , anchorScrolling: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
