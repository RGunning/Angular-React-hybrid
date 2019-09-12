import React from 'react';

import {
  ɵrenderComponent as renderComponent,
  ɵdetectChanges as detectChanges,
  ɵLifecycleHooksFeature as LifecycleHooksFeature,
  ɵComponentType as componentType
} from '@angular/core';
import { Subscription } from 'rxjs';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [key: string]: any;
    }
  }
}

export class ReactGenericWrapper<T> extends React.Component<any, any> {
  private childComponent;
  private componentDef;
  private _subscriptions: Subscription[] = [];

  constructor(props, private componentFactory: componentType<T>) {
    super(props);
    if(!componentFactory.hasOwnProperty('ngComponentDef')){
      throw new Error('A component with a ngComponentDef is required');
    }
    this.componentDef = componentFactory.ngComponentDef;

    this.state = {
      component: this.componentDef ? this.componentDef.selectors[0][0] : '',
    };
  }

  componentWillUnmount() {
    this._subscriptions.forEach(subscription => subscription.unsubscribe())
  }


  // After the component did mount, we set the state each second.
  componentDidMount() {

    // render component after selector is in DOM
    this.childComponent = renderComponent(this.componentFactory, { hostFeatures: [LifecycleHooksFeature] });

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


