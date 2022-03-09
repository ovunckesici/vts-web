import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PrivateLayoutComponent} from "../layout/private-layout/private-layout.component";
import {DashboardComponent} from "./dashboard.component";

const routes: Routes = [
  {
    path: '',
    component: PrivateLayoutComponent,
    children: [
      {path: '', component: DashboardComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
