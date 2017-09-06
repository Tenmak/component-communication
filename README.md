# CLI-seed

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# component-communication
An example of different component communications with a sturdy base app.

Here we have several things to note :
  - AppModule imports the MainModule (similar to your DashboardModule).
  - ReapeatOrder module is lazy-loaded and can be navigated to from the MainModule.
  - Both Modules import a shared module, with shared components.
  - Both MainModule and ReapeatOrderuse the shared components in their templates.
