import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {routes} from "./app.router";
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {AppService} from "./app.service";
import {RegistrationComponent} from "./RegistrationComponent/registration.component";
import {NotFoundComponent} from "./NotFoundComponent/notFound.component";
import {HomeComponent} from "./HomeComponent/home.component";
import {ShowUsersComponent} from "./ShowUsersComponent/showUsers.component";

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    NotFoundComponent,
    HomeComponent,
    ShowUsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
