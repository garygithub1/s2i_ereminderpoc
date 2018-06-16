import {Component, ChangeDetectorRef, ChangeDetectionStrategy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FormGroup} from '@angular/forms';
import {TranslateService} from '@ngx-translate/core';
import {DataService} from './service/data.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 's2i-app-main',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class S2iAppComponent {

  constructor(private ref: ChangeDetectorRef, private router: ActivatedRoute, private trans: TranslateService, private api: DataService) {
    // trans.setTranslation('en', {
    //   'enr.dln': 'DLN'
    // });

    console.log('S2iAppComponent created.');
    console.log('TranslateService initializing.');

    trans.setDefaultLang('en');

    const lang: string = router.snapshot.queryParams['lang'];
    if (lang && lang.toLowerCase() === 'fr') {
      trans.use('fr');
    } else {
      trans.use('en');
    }
  }

  flow = 'VERIFY';
  errMsg = '';

  fm: FormGroup = new FormGroup({
    // emailGrp: new FormGroup({
    //   email: new FormControl(null, [
    //     Validators.required,
    //     Validators.pattern('[^ @]*@[^ @]*')
    //   ]),
    //   // reemail: new FormControl(null, [
    //   //   Validators.required,
    //   //   Validators.pattern('[^ @]*@[^ @]*'),
    //   //   (control: FormControl): any => {
    //   //     if (control.root.value && control.value !== control.root.value.emailGrp.email) {
    //   //       return { 'notmatch': true };
    //   //     }
    //   //     return null;
    //   //   }
    //   // ]),
    // }),
  });

  onVerify() {
    this.fm.controls.driverLicenceNumber.markAsTouched();
    // this.fm.controls.trillium.markAsTouched();
    this.fm.controls.expiryDate.markAsTouched();

    // if (this.fm.controls.driverLicenceNumber.valid && this.fm.controls.trillium.valid && this.fm.controls.expiryDate.valid) {
    if (this.fm.controls.driverLicenceNumber.valid && this.fm.controls.expiryDate.valid) {

      this.api.doVerify(this.fm.value).subscribe((data: any) => {
        console.log('verify', data);

        if (data.driverLicenceNumber === 'L22222222222222') {
          // if (this.fm.value.driverLicenceNumber === 'L22222222222222') {
          this.flow = 'UPDATE';
        } else {
          this.flow = 'SUBSCRIBE'; // 'SUBMIT';
        }

        this.ref.detectChanges();
      }, err => {
        console.warn('Oops:', err.message);
        this.errMsg = err.message;

        this.ref.detectChanges();
      });

    }
  }

  onSubscribe() {
    this.doSubmit();
  }

  onUpdate() {
    this.doSubmit();
  }

  doSubmit() {
    this.fm.controls.email.markAsTouched();
    if (this.fm.controls.email.valid) {

      this.api.doSubmit(this.fm.value).subscribe((data: any) => {
        console.log('submit', data);
      }, err => {
        console.warn('Oops:', err.message);
        this.errMsg = err.message;

        this.ref.detectChanges();
      });


      this.flow = 'DONE';
    }
    // const egrp: FormGroup = <FormGroup>this.fm.controls.emailGrp;
    // egrp.controls.email.markAsTouched();
    // if (egrp.controls.email.valid) {

    //   this.api.doSubmit(this.fm.value).subscribe((data: any) => {
    //     console.log('submit', data);
    //   }, err => {
    //     console.warn('Oops:', err.message);
    //     this.errMsg = err.message;

    //     this.ref.detectChanges();
    //   });


    //   this.flow = 'DONE';
    // }
  }

  // dev functions
  onTestSubscribe() {
    if (this.flow === 'VERIFY') {
      this.fm.controls.driverLicenceNumber.setValue('A11111111111111');
      this.fm.controls.expiryDate.setValue('2018-06-01');
    } else if (this.flow === 'SUBSCRIBE') {
      // (<FormGroup>this.fm.controls.emailGrp).controls.email.setValue('daniel.lei@ontario.ca');
      this.fm.controls.email.setValue('daniel.lei@ontario.ca');
    }
  }

  onTestUpdate() {
    if (this.flow === 'VERIFY') {
      this.fm.controls.driverLicenceNumber.setValue('L22222222222222');
      this.fm.controls.expiryDate.setValue('2018-06-01');
    } else if (this.flow === 'UPDATE') {
      // (<FormGroup>this.fm.controls.emailGrp).controls.email.setValue('daniel.lei@ontario.ca');
      this.fm.controls.email.setValue('daniel.lei@ontario.ca');
    }
  }
}
