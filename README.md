# Alinta Energy Portal
This project was created for an interview for Alinta Energy. It was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.2.0. It uses [ng-lightning](https://ng-lightning.github.io/ng-lightning/#/) for UI. I've built a basic service that uses observables to persist data to localStorage. There are also a basic set of tests - mainly around the service layer. It allows a user to add, edit, and update customer records.

# What I would have done with more time.
* Write more tests
* Make the customer search use an observable pipe
* Handle error validation on the date field more thoroughly
* Add sorting by first/last name on customer table


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).