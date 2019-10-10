import React from 'react';

import {
  ɵrenderComponent as renderComponent,
  ɵmarkDirty as markDirty,
  ɵLifecycleHooksFeature as LifecycleHooksFeature,
  ɵComponentType as componentType,
  SimpleChange,
  SimpleChanges
} from '@angular/core';
import { Subscription } from 'rxjs';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [key: string]: any;
    }
  }
}

export class ReactNgWrapper<T> extends React.Component<any, { ngComponentName: string, propChanged: Set<string> }> {
  private _childComponent;
  private _componentDef;
  private _subscriptions: Subscription[] = [];

  constructor(props, private componentFactory: componentType<T>) {
    super(props);
    if (!componentFactory.hasOwnProperty('ngComponentDef')) {
      throw new Error('A component with a ngComponentDef is required');
    }
    this._componentDef = componentFactory.ngComponentDef;

    this.state = {
      ngComponentName: this._componentDef ? this._componentDef.selectors[0][0] : '',
      propChanged: new Set<string>()
    };
  }

  componentWillUnmount() {
    this._subscriptions.forEach(subscription => subscription.unsubscribe())
  }

  // After the component did mount, we set the state each second.
  componentDidMount() {
    // render component after selector is in DOM
    this._childComponent = renderComponent(this.componentFactory, { hostFeatures: [LifecycleHooksFeature] });

    // listen to outputs
    this._subscriptions.push(
      ...Object.keys(this._componentDef.outputs).map(
        (output) => {
          return this._childComponent[output].subscribe((e) => {
            if (this.props[output] && typeof this.props[output] === "function") {
              this.props[output](e)
            }
          })
        }
      )
    )

    // bind inputs
    this.updateComponent();
  }

  componentDidUpdate() {
    this.updateComponent();
  }

  updateComponent() {
    if (this._childComponent) {
      const changes: SimpleChanges = {}
      // update inputs and detect changes
      Object.keys(this.props).forEach(prop => {
        if (this._childComponent[prop] &&
          Object.keys(this._componentDef.inputs).includes(prop) &&
          this._childComponent[prop] !== this.props[prop]) {

          changes[prop] = new SimpleChange(this._childComponent[prop], this.props[prop], !this.state.propChanged.has(prop))
          this.state.propChanged.add(prop);
          this._childComponent[prop] = this.props[prop]
        }
      })

      if (typeof this._childComponent.ngOnChanges === "function") {
        this._childComponent.ngOnChanges(changes);
      }

      markDirty(this._childComponent);
    }
  }

  // render will know everything!
  render() {
    const CustomTag = `${this.state.ngComponentName}`;

    return (
      <CustomTag></CustomTag>
    )
  }
}
