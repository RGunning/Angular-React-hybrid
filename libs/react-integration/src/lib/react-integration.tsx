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

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'hello-world': any;
    }
  }
}


@Component({ selector: 'hello-world', template: 'Hello {{name}}!' })
class HelloWorld implements OnInit {
  @Input() name = 'world';
  @Output() stuff = new EventEmitter();

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

  constructor(props) {
    super(props);
    this.state = {
      name: 'project-react'
    };
  }

  // Before the component mounts, we initialise our state
  componentWillMount() {
    //
  }

  // After the component did mount, we set the state each second.
  componentDidMount() {

    // render component
    this.childComponent = renderComponent(HelloWorld, { hostFeatures: [LifecycleHooksFeature] });

    // listen to outputs
    this.childComponent.stuff.subscribe((e) => { console.log(e) })
    this.updateComponent();
  }

  updateComponent() {
    if (this.childComponent) {
      // update inputs and detect changes
      this.childComponent.name = this.state.name;
      detectChanges(this.childComponent)
    }
  }

  // render will know everything!
  render() {
    this.updateComponent();
    return (
      <div>
        <h1>Welcome to react-integration component!</h1>
        <hello-world name={this.state.name}></hello-world>
      </div>
    )
  }
}
