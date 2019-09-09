import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ReactIntegrationModule} from '@hybrid/test-react';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ReactIntegrationModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
