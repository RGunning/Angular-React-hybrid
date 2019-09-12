import { Component, AfterViewInit, ElementRef } from '@angular/core';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HelloJSX } from '@hybrid/react-component-library';

@Component({
  selector: 'hybrid-hello-jsx',
  template: ``,
  styles: [``]
})
export class HelloJSXComponent implements AfterViewInit {

  constructor(private hostRef: ElementRef) { }

  ngAfterViewInit(): void {
    const hostElement = this.hostRef.nativeElement;
    const LabelToShow = () => (
      // Actual use here, might include data-binding in a real world scenario
      <HelloJSX></HelloJSX>
    );
    ReactDOM.render(<LabelToShow />, hostElement);
  }

}
