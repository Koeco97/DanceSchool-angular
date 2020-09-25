import { LoginPageComponent } from './login-page/login-page.component';
import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import { AuthLayoutComponent } from './shared/layouts/auth-layout/auth-layout.component';
import { SiteLayoutComponent } from './shared/layouts/site-layout/site-layout.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { from } from 'rxjs';
import { AuthGuard } from './shared/classes/auth.guard'

const routes: Routes = [
  {path: '', component: AuthLayoutComponent, children: [
      {path: '', redirectTo: '/login', pathMatch: 'full'},
      {path: 'login', component: LoginPageComponent},
      {path: 'register', component: RegisterPageComponent}
    ]
  },
  {path: 'overview', component: SiteLayoutComponent, children: [
    
  ]
}
]

@NgModule({
  imports:[
  RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule{

}