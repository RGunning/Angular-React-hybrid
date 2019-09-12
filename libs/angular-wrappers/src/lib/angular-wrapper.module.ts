import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloJSXComponent } from './hello-jsx.component';

@NgModule({
  declarations: [HelloJSXComponent],
  imports: [CommonModule],
  exports: [HelloJSXComponent],
  providers: [],
})
export class AngularWrapperModule {}
