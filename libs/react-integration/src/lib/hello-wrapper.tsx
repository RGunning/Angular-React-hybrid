import React from 'react';

import {
  ɵrenderComponent as renderComponent,
  ɵdetectChanges as detectChanges,
  ɵLifecycleHooksFeature as LifecycleHooksFeature
} from '@angular/core';
import { Subscription } from 'rxjs';
import { HelloWorld } from './angular.component';
import { ReactGenericWrapper } from './react-generic-wrapper';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [key: string]: any;
    }
  }
}
export class HelloWrapper extends ReactGenericWrapper<HelloWorld> {
  constructor(props){
    super(props, HelloWorld as any)
  }
}
