import * as React from "react";
import { Component } from "react";
import {ReactIntegration} from '@hybrid/react-integration';

import "./app.scss";
export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "project-react",
    };
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({name: "project-react 2"})
    }, 1000);
  }

  onStuff(e){
    console.log(`stuff happened ${e}`)
  }

  render() {
    return (
      <div>
        <div style={{ textAlign: "center" }}>
          <ReactIntegration name={this.state.name} stuff={this.onStuff}></ReactIntegration>
        </div>
      </div>
    );
  }
}
