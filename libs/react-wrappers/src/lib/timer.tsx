import { ReactNgWrapper } from '@hybrid/react-ng-wrapper'
import { TimerComponent } from '@hybrid/angular-component-library';

export class ReactTimerComponent extends ReactNgWrapper<TimerComponent> {
  constructor(props) {
    super(props, TimerComponent as any)
  }
}
