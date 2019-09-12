import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReactIntegrationModule } from '@hybrid/test-react';
import { AngularComponentsModule } from '@hybrid/angular-components'
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ReactIntegrationModule, AngularComponentsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
