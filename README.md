# Angular React hybrid aplications

Proof of Concept Angular-React Hybrid project based on ng-packagr example application https://github.com/ng-packagr/ng-packagr/tree/master/integration

This project has 2 component libraries, 1 written in react and one in Angular. Using the `react-wrappers` library, we then convert the angular components into react compatible components. Likewise using the `angular-wrappers` library we convert the react components for use in angular applications.

Three demo applications are included in this repository

  - `react-app` - is a react application which imports both the `react-component-library` and the `angular-component-library` (via the `react-wrappers` and `react-ng-wrapper` libraries).
  - `angular-app` - imports the `react-component-library` (via the `angular-wrappers` library)
  - `angular-ivy-app` - imports the `angular-component-library` to show they can still be used within angular.

This project was generated using [Nx](https://nx.dev).

## Build

Run `yarn build:all` to build all the libraries.

## Development server

Run `yarn start [app]` (where app is one of `react-app`, `angular-app` or `angular-ivy-app`).

Navigate to `http://localhost:4200/`.
