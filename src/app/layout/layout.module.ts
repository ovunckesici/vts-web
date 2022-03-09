import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PublicLayoutComponent} from "./public-layout/public-layout.component";
import {PrivateLayoutComponent} from "./private-layout/private-layout.component";
import {RouterModule} from "@angular/router";
import {HeaderComponent} from "./header/header.component";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {AppModule} from "../app.module";
import {DropdownDirective} from "../directives/dropdown.directive";

@NgModule({
  declarations: [
    PublicLayoutComponent,
    PrivateLayoutComponent,
    HeaderComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([]),
  ],
  exports: [
    PublicLayoutComponent,
    PrivateLayoutComponent,
  ]
})
export class LayoutModule {
}
