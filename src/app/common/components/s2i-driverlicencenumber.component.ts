import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormArray, Validators} from '@angular/forms';

@Component({
  selector: 's2i-driverlicencenumber',
  templateUrl: './s2i-driverlicencenumber.component.html',
  // styleUrls: ['./s2i-driverlicencenumber.component.css']
})
export class S2iDriverlicencenumberComponent implements OnInit {

  @Input() controlContainer: FormGroup; // | FormArray;
  @Input() controlName: string;

  v: FormControl;

  constructor() {
    console.log('S2iDriverlicencenumberComponent created.');
  }

  label = 'enr.dln'; // 'Driver’s licence number:';
  title = 'Please enter your driver’s licence number.';
  placeholder = 'AXXXX-XXXXX-XXXXX';

  ngOnInit() {
    if (this.controlContainer && this.controlName) {
      if (!this.controlContainer.get(this.controlName)) {
        this.controlContainer.addControl(this.controlName, new FormControl(null, [
          Validators.required,
          Validators.pattern('^[a-zA-Z]\\d{4}\\d{5}\\d{3}(0[1-9]|[12][0-9]|3[01])$')
        ]));
      }
      this.v = <FormControl>this.controlContainer.get(this.controlName);
    } else {
      //throw
    }
  }

}

