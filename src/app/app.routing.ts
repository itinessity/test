import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {PageComponent} from "../pages/main-page/page.component";
import {LoginComponent} from "../pages/login/LoginComponent";
import {RegisterComponent} from "../pages/register/RegisterComponent";


export  const routes: Routes =
  [
    {
      path: '', component: PageComponent,
    },
    {
      path: 'login', component: LoginComponent,
    },
    {
      path: 'register', component: RegisterComponent,
    }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes,  { useHash: false , anchorScrolling: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
