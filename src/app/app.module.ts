import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { Page404Component } from './components/page404/page404.component';
import { AboutComponent } from './components/about/about.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { AuthorizationComponent } from './components/authorization/authorization.component';

import { HttpClientModule } from '@angular/common/http';
import { EmailconfirmComponent } from './components/emailconfirm/emailconfirm.component';


const appRoutes: Routes =[
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'registration', component: RegistrationComponent},
  { path: 'authorization', component: AuthorizationComponent},
  { path: 'emailconfirm', component: EmailconfirmComponent},
  { path: '**', component: Page404Component }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Page404Component,
    AboutComponent,
    RegistrationComponent,
    AuthorizationComponent,
    EmailconfirmComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
