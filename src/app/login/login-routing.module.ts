import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PublicLayoutComponent} from '../layout/public-layout/public-layout.component';
import {LoginComponent} from "./login.component";

const routes: Routes = [
  {
    path: '',
    component: PublicLayoutComponent,
    children: [
      {path: '', component: LoginComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule {
}
