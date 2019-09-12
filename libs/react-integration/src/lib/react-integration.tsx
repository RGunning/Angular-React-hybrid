import React from 'react';

import {
  Input,
  Output,
  EventEmitter,
  OnInit,
  Component,
  ɵrenderComponent as renderComponent,
  ɵmarkDirty as markDirty,
  ɵdetectChanges as detectChanges,
  ɵLifecycleHooksFeature as LifecycleHooksFeature
} from '@angular/core';
import { Subscription } from 'rxjs';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [key: string]: any;
    }
  }
}


@Component({ selector: 'hello-world', template: 'Hello {{name}}!' })
class HelloWorld implements OnInit {
  @Input() name = 'world';
  @Output() stuff = new EventEmitter<string>();

  ngOnInit() {
    setTimeout(() => {
      console.log('ngOnInit')
      this.stuff.next('loaded');
    }, 1000);
  }
}
//import './react-integration.css';


export class ReactIntegration extends React.Component<any, any> {
  private childComponent;
  private componentDef;
  private _subscriptions: Subscription[] = [];

  constructor(props) {
    super(props);
    this.componentDef = (HelloWorld as any).ngComponentDef
    console.log(this.componentDef)

    this.state = {
      component: this.componentDef ? this.componentDef.selectors[0][0] : '',
    };
  }

  // Before the component mounts, we initialise our state
  componentWillMount() {
    //
  }

  componentWillUnmount() {
    this._subscriptions.forEach(subscription => subscription.unsubscribe())
  }


  // After the component did mount, we set the state each second.
  componentDidMount() {

    // render component after selector is in DOM
    this.childComponent = renderComponent(HelloWorld, { hostFeatures: [LifecycleHooksFeature] });

    this._subscriptions.push(
      ...Object.keys(this.componentDef.outputs).map(
        (output) => {
          return this.childComponent[output].subscribe((e) => {
            if (this.props[output] && typeof this.props[output] === "function") {
              this.props[output](e)
            }
          })
        }
      )
    )

    // listen to outputs
    this.updateComponent();
  }

  updateComponent() {
    if (this.childComponent) {
      // update inputs and detect changes
      Object.keys(this.props).forEach(prop => {
        if (this.childComponent[prop] && Object.keys(this.componentDef.inputs).includes(prop)) {
          this.childComponent[prop] = this.props[prop]
        }
      })

      detectChanges(this.childComponent)
    }
  }

  // render will know everything!
  render() {
    this.updateComponent();
    const CustomTag = `${this.state.component}`;

    return (
      <CustomTag></CustomTag>
    )
  }
}
