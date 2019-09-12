import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularComponentLibraryModule } from '@hybrid/angular-component-library'
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AngularComponentLibraryModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
