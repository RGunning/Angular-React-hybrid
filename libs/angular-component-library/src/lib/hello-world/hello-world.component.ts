import {
  Input,
  Output,
  EventEmitter,
  OnInit,
  Component,
} from '@angular/core';

@Component({ selector: 'hybrid-hello-world', template: 'Hello {{name}}!' })
export class HelloWorldComponent implements OnInit {
  @Input() name = 'world';
  @Output() stuff = new EventEmitter<string>();

  ngOnInit() {
    setTimeout(() => {
      this.stuff.next('loaded');
    }, 1000);
  }
}
