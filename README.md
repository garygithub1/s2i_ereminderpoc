# S2i EReminderpoc Project

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.5.

## Application Structure:
```
src
│   index.html
│   main.ts
│   styles.css
│
├───app
│   │   app.component (ts, html, css)
│   │   app.module.ts
│   │
│   ├───common
│   │   │   s2i-common.module.ts
│   │   │
│   │   └───components
│   │           s2i-driverlicencenumber.component (ts, html)
│   │           s2i-email.component (ts, html)
│   │           s2i-expirydate.component (ts, html)
│   │           s2i-navbuttons.component (ts, html)
│   │
│   └───service
│           data.service.ts
│
├───assets
│   │
│   └───i18n
│           en.json
│           fr.json
│
└───environments
        environment.prod.ts
        environment.ts
```

### index.html
```html
<body>
  <div class="S2i">
    <s2i-header></s2i-header>

    <s2i-app-main>...</s2i-app-main>

    <div style="display: none">
      <!-- S2i Child -->
      <s2i-child-component>Loading S2i child component...</s2i-child-component>
    </div>

    <s2i-footer></s2i-footer>
  </div>

  <!-- S2i Base -->
  <script type="text/javascript" src="http://10.160.200.137:3000/runtime.js"></script>
  <script type="text/javascript" src="http://10.160.200.137:3000/polyfills.js"></script>
  <script type="text/javascript" src="http://10.160.200.137:3000/styles.js"></script>
  <script type="text/javascript" src="http://10.160.200.137:3000/vendor.js"></script>
  <script type="text/javascript" src="http://10.160.200.137:3000/main.js"></script>
</body>
```

### app.component.html
```html
<div class="FormPage">
  <div class="Errors" ... *ngIf="flow !== 'DONE'">
    ... page errors ...
  </div>

  <form [formGroup]="fm" novalidate>
    <div *ngIf="flow !== 'DONE'">

      <s2i-driverlicencenumber ...></s2i-driverlicencenumber>

      <s2i-expirydate ...></s2i-expirydate>

      <s2i-navbuttons ...></s2i-navbuttons>

    </div>

    <div *ngIf="flow === 'SUBSCRIBE'">

      <s2i-email ...></s2i-email>

      <s2i-navbuttons ...></s2i-navbuttons>
      
    </div>

    <div *ngIf="flow === 'UPDATE'">

      <s2i-email ...></s2i-email>

      <s2i-navbuttons ...></s2i-navbuttons>

    </div>

    <div ... *ngIf="flow === 'DONE'">
      <h3 ...>Your subscription is successfully updated.</h3>
    </div>

  </form>
</div>
```

---
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
