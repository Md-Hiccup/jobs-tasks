import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AngularTrix } from 'angular-trix';

import { AppComponent } from './app.component';
import { TrixEditorComponent } from './trixeditor/trixeditor.component';

const appRoutes : Routes = [
  {
    path: 'trixs',
    component:  TrixEditorComponent,
    data : {  title: 'Trix Editor '}
  },
  {
    path: '',
    redirectTo: '/trixs',
    pathMatch: 'full'
  }
]

@NgModule({
  declarations: [
    AppComponent,
    TrixEditorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // debugging purpose only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
