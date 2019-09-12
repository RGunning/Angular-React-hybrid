import * as React from "react";
import { Component } from "react";
import {ReactIntegration} from '@hybrid/react-integration';

import "./app.scss";
export class App extends Component {

  render() {
    return (
      <div>
        <div style={{ textAlign: "center" }}>
      Hello React
          <ReactIntegration></ReactIntegration>
        </div>
      </div>
    );
  }
}
