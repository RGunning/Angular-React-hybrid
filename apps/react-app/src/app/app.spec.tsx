import * as React from "react";
import { render, cleanup } from "react-testing-library";

import { App } from "./app";

describe("App", () => {
  afterEach(cleanup);

  it("should render successfully", () => {
    const { baseElement } = render(<App />);
    expect(baseElement).toBeTruthy();
  });

  it("should have a greeting as the title", () => {
    const { getByText } = render(<App />);
    expect(getByText("Welcome to react-app!")).toBeTruthy();
  });
});
