import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SocketIoConfig, SocketIoModule} from "ngx-socket-io";
import * as mapbox from 'mapbox-gl';
import {environment} from "../environments/environment";
import {HttpClientModule} from "@angular/common/http";
import {LoginModule} from "./login/login.module";
import {LayoutModule} from "./layout/layout.module";
import {DropdownDirective} from "./directives/dropdown.directive";

(mapbox as any).accessToken = environment.mapbox.accessToken

const config: SocketIoConfig = {url: 'http://localhost:3333', options: {}};

@NgModule({
  declarations: [
    AppComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SocketIoModule.forRoot(config),
    LayoutModule,
    LoginModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
