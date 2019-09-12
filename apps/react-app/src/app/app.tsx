import * as React from "react";
import { Component } from "react";
import { HelloWrapper } from '@hybrid/react-integration';
import { ReactTimerComponent } from '@hybrid/react-material';

import "./app.scss";
export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "project-react",
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ name: "project-angular-react" })
    }, 2000);
  }

  onStuff(e) {
    console.log(`stuff happened ${e}`)
  }

  render() {
    return (
      <div>
        <div style={{ textAlign: "center", fontSize: "xx-large" }}>
          <HelloWrapper name={this.state.name} stuff={this.onStuff}></HelloWrapper>
          <div>
            <ReactTimerComponent></ReactTimerComponent>
          </div>
        </div>
      </div>
    );
  }
}
