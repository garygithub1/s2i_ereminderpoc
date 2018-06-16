import {NgModule, Component} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';

import {S2iCommonModule} from './common/s2i-common.module';
import {S2iAppComponent} from './app.component';

@Component({
  template: `<div class="Instructions"><h1>404 Page not found</h1></div>`
})
export class PageNotFoundComponent {
}

const routes: Routes = [
  // {path: '', redirectTo: '/drs', pathMatch: 'full'},
  {path: '', component: S2iAppComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {enableTracing: true}),
    BrowserModule, ReactiveFormsModule, TranslateModule,
    S2iCommonModule
  ],
  declarations: [S2iAppComponent, PageNotFoundComponent],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
