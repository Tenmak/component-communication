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
  - The `app.module.ts` only has what is necessary for the app to launch. Clear and efficient.
  - The `core.module.ts` has one purpose : To provide service instances as singletons to the whole app. This ensures there are no issues with critical services that must not have several instances running at the same time. This concerns shared services, and services that need to be used with several lazy-loaded modules.
  - The `main-module.module.ts` is pretty simple : It serves the only component that displays everything else. 
  - The `shared.module.ts` is here to serve all the reusable components of the app. This project is mostly to show how shared components can work between one another.

Now onto the details : 
  - `ModalComponent` communicates with `AttachmentComponent` with the help of `Inputs`. Each `ModalComponent` will only communicate with his own linked `AttachmentComponent`.
  - `GlobalModalComponent` on the other hand is not directly linked to the `GlobalAttachmentComponent`. It uses the shared service `GlobalService` which stores the data to display and provides methods to manipulate this data, which is displayed by the 2 components. `GlobalModalComponent` will use buttons to call the methods from the service to `Add` / `Remove` data; and `GlobalAttachmentComponent` will display this data. In this example, there are 2 instances of `GlobalAttachmentComponent` to show that the data from the service is shared between them.