# ComicHub

> List of comics and characters. Simple and practice for you!

This is an aplication which displays the Comics in Marvel collection. Using these technologies

- Angular
- Angular CLI
- Angular Material
- RXJS
- Postman (to check API responses)

## Demo

The demo page is hosted on Github pages you can access on this link https://nilanarocha.github.io/comic-hub/. You can find more details of how to configure and publish source from Github into Github pages acessing this link: https://help.github.com/en/articles/configuring-a-publishing-source-for-github-pages .

## Deployment

This project is using `angular-cli-ghpages` to deploy our code to Github pages. So it requires a Github account and a repository to be deployed.

After that, make sure the Github branch is up-to-date with your code changes and run this commands:

```
ng deploy --base-href=/comic-hub/
# or
npm run ng deploy --base-href=/comic-hub/
```

If you prefer, you can just run `./deploy.sh`. Easy, peasy! 😊

## Development instructions

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.16. So these instructions are based on the main Angular CLI scaffolding.

### Setup (Front-end)

1. Clone this repository
2. Run these commands

   2.1 Install all modules listed as dependencies in `package.json

```
npm install
```

2.2 Run local client

```
npm start
```

3. Open the browser in http://localhost:4200

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Author

_Nilana Rocha (nilanarocha)_

- <http://github.com/nilanarocha>
