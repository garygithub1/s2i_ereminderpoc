import {NgModule, Component} from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import {AppRoutingModule} from './app-routing.module';

// AoT requires an exported function for factories
export function resourceLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

// @Component({
//   selector: 's2i-app-header',
//   // templateUrl: './theme/app.header.html',
//   template: `
//     <header class="shadow text-center"><h3 class="text-white" style="background-color:#0b713d">{{todo}}</h3></header>`
// })
// export class AppHeaderComponent {
//   todo = 'ServiceOntario';
// }
//
// @Component({
//   selector: 's2i-app-footer',
//   // templateUrl: './theme/app.footer.html',
//   template: `
//     <footer class="shadow text-center"><img src="https://www.ontario.ca/img/footer-swoosh.png" style="width: 100%;height: 96px;"></footer>`
// })
// export class AppFooterComponent {
//   todo = 'S2I-APP-FOOTER';
// }

@Component({
  selector: 's2i-app-root',
  template: `
    <router-outlet></router-outlet>`
})
export class AppHomeComponent {
}

@NgModule({
  declarations: [
    AppHomeComponent
  ],
  imports: [
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: resourceLoaderFactory,
        deps: [HttpClient]
      }
    }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppHomeComponent]
})
export class AppModule {
}
