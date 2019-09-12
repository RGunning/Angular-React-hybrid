import {
  Input,
  Output,
  EventEmitter,
  OnInit,
  Component,
  NgModule
} from '@angular/core';

@Component({ selector: 'hello-world', template: 'Hello {{name}}!' })
export class HelloWorld implements OnInit {
  @Input() name = 'world';
  @Output() stuff = new EventEmitter<string>();

  ngOnInit() {
    setTimeout(() => {
      this.stuff.next('loaded');
    }, 1000);
  }
}

// included to get rid of component not in a module tslint warning
@NgModule({
  imports: [],
  declarations: [HelloWorld],
  exports: []
})
export class AngularComponentsModule {}
