import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularComponentLibraryModule } from '@hybrid/angular-component-library'
import { AngularWrapperModule } from '@hybrid/angular-wrappers'
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AngularComponentLibraryModule, AngularWrapperModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
