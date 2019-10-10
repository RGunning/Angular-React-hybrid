import {
  Input,
  Output,
  EventEmitter,
  OnInit,
  Component,
  OnChanges,
} from '@angular/core';

@Component({ selector: 'hybrid-hello-world', template: 'Hello {{name}}!' })
export class HelloWorldComponent implements OnInit, OnChanges {
  @Input() name = 'world';
  @Output() stuff = new EventEmitter<string>();

  ngOnInit() {
    setTimeout(() => {
      this.stuff.next('loaded');
    }, 1000);
  }

  ngOnChanges(changes){
    console.log(changes)
  }
}
