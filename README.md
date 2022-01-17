# 119-dai-idai-angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.7.
Current Angular version is 8.

## Quick start

Run
`yarn install`
`yarn start`

## Development server

Run `yarn start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `yarn build` to build the project for production. The build artifacts will be stored in the `dist/` directory.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Docker

Run `docker-compose build` to build the image and `docker-compose up` to start a
container locally. The running container can then be accessed under
http://localhost:8080.

## Continuous Delivery

In order to simplify updates to the content a CD pipeline has been configured with
GitHub Actions. This pipeline makes sure that the docker image is automatically built
and deployed on every push. The target system depends on the branch. The master branch
is deployed in the test environment, the stable branch is deployed in the production
environment.
