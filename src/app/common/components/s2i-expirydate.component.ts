import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormArray, Validators} from '@angular/forms';

@Component({
  selector: 's2i-expirydate',
  templateUrl: './s2i-expirydate.component.html',
  // styleUrls: ['./s2i-expirydate.component.css']
})
export class S2iExpirydateComponent implements OnInit {

  @Input() controlContainer: FormGroup; // | FormArray;
  @Input() controlName: string;

  v: FormControl;

  constructor() {
    console.log('S2iExpirydateComponent created.');
  }

  label = 'enr.dlExpiryDate';
  title = 'enr.dlExpiryDate.title';

  ngOnInit() {
    if (this.controlContainer && this.controlName) {
      if (!this.controlContainer.get(this.controlName)) {
        this.controlContainer.addControl(this.controlName, new FormControl(null, [
          Validators.required
        ]));
      }
      this.v = <FormControl>this.controlContainer.get(this.controlName);
    } else {
      //throw
    }
  }

}
