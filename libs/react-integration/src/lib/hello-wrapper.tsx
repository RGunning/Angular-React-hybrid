import { ReactNgWrapper } from '@hybrid/react-ng-wrapper'

import { HelloWorld } from './angular.component';

export class HelloWrapper extends ReactNgWrapper<HelloWorld> {
  constructor(props){
    super(props, HelloWorld as any)
  }
}
