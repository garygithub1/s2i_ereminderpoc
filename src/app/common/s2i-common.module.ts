import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';
import {S2iDriverlicencenumberComponent} from './components/s2i-driverlicencenumber.component';
import {S2iExpirydateComponent} from './components/s2i-expirydate.component';
import {S2iEmailComponent} from './components/s2i-email.component';
import {S2iNavbuttonsComponent} from './components/s2i-navbuttons.component';

@NgModule({
  imports: [
    CommonModule, ReactiveFormsModule, TranslateModule
  ],
  declarations: [S2iDriverlicencenumberComponent, S2iExpirydateComponent, S2iEmailComponent, S2iNavbuttonsComponent],
  exports: [
    S2iDriverlicencenumberComponent, S2iExpirydateComponent, S2iEmailComponent, S2iNavbuttonsComponent
  ]
})
export class S2iCommonModule {
  constructor() {
    console.log('S2iCommonModule created.');
  }
}
