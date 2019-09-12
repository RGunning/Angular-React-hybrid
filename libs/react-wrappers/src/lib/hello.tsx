import { ReactNgWrapper } from '@hybrid/react-ng-wrapper'
import { HelloWorldComponent } from '@hybrid/angular-component-library';

export class ReactHelloComponent extends ReactNgWrapper<HelloWorldComponent> {
  constructor(props){
    super(props, HelloWorldComponent as any)
  }
}
