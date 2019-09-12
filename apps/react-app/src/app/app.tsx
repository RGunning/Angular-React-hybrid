import * as React from "react";
import { ReactTimerComponent, ReactHelloComponent } from '@hybrid/react-wrappers';

import "./app.scss";
export class App extends React.Component {
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
          <ReactHelloComponent name={this.state.name} stuff={this.onStuff}></ReactHelloComponent>
          <div>
            <ReactTimerComponent></ReactTimerComponent>
          </div>
        </div>
      </div>
    );
  }
}
