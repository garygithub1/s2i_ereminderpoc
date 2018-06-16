import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormArray, Validators} from '@angular/forms';

@Component({
  selector: 's2i-email',
  templateUrl: './s2i-email.component.html',
  // styleUrls: ['./s2i-email.component.css']
})
export class S2iEmailComponent implements OnInit {

  @Input() controlContainer: FormGroup; // | FormArray;
  @Input() controlName: string;
  @Input() helpText: string;

  v: FormControl;

  constructor() {
    console.log('S2iEmailComponent created.');
  }

  label = 'Email address:';
  title = 'Please enter your email address.';
  placeholder = 'Enter email';

  ngOnInit() {
    if (this.controlContainer && this.controlName) {
      if (!this.controlContainer.get(this.controlName)) {
        this.controlContainer.addControl(this.controlName, new FormControl(null, [
          Validators.required,
          Validators.pattern('[^ @]*@[^ @]*')
        ]));
      }
      this.v = <FormControl>this.controlContainer.get(this.controlName);
    } else {
      //throw
    }
  }

}
