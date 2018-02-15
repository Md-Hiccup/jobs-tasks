import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
// import { AngularTrix } from 'angular-trix';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TrixeditorComponent } from './trixeditor/trixeditor.component';
import { NavbarComponent } from './navbar/navbar.component';

const appRoutes : Routes = [
  {
    path: 'dashboards',
    component:  DashboardComponent,
    data : {  title: 'Dashboard '}
  },
  {
    path: 'trix-editor',
    component: TrixeditorComponent,
    data : {  title: 'Trix Editor '}
  },
  {
    path: '',
    redirectTo: '/dashboards',
    pathMatch: 'full'
  }
]

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TrixeditorComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    // AngularTrix,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // debugging purpose only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
