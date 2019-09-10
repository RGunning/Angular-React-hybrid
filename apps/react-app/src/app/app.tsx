import * as React from "react";
import { Component } from "react";
import {ReactLabel} from '@hybrid/react-components';

import "./app.scss";

export class App extends Component {
  render() {
    return (
      <div>
        <div style={{ textAlign: "center" }}>
          <ReactLabel></ReactLabel>
        </div>
      </div>
    );
  }
}
