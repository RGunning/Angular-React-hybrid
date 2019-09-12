import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimerComponent } from './timer/timer.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';

@NgModule({
  imports: [CommonModule],
  declarations: [TimerComponent, HelloWorldComponent],
  exports: [TimerComponent, HelloWorldComponent]
})
export class AngularComponentLibraryModule { }
