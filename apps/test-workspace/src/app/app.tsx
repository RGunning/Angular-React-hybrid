import * as React from "react";
import { Component } from "react";

import "./app.scss";

export class App extends Component {
  render() {
    const title = "test-workspace";
    return (
      <div>
        <div style={{ textAlign: "center" }}>
          <h1>Welcome to {title}!</h1>
          <img
            width="450"
            src="https://raw.githubusercontent.com/nrwl/nx/master/nx-logo.png"
          />
        </div>
        <p>
          This is a React app built with <a href="https://nx.dev">Nx</a>.
        </p>
        <p>
          🔎 **Nx is a set of Angular CLI power-ups for modern development.**
        </p>
        <h2>Quick Start & Documentation</h2>
        <ul>
          <li>
            <a href="https://nx.dev/getting-started/what-is-nx">
              30-minute video showing all Nx features
            </a>
          </li>
          <li>
            <a href="https://nx.dev/tutorial/01-create-application">
              Interactive tutorial
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
