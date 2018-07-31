import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  public myFormGroup: FormGroup;
  constructor() {
    this.myFormGroup = new FormGroup({
      bookingOwnerEmail: new FormControl(null),
      bookingOwnerFName: new FormControl(null),
      bookingOwnerLName: new FormControl(null),
      participants: new FormArray([])
    });
  }

  get participants(): FormArray {
    return this.myFormGroup.get('participants') as FormArray;
  }
  addParticipant() {
    this.participants.push(this.newParticipant());
  }
  newParticipant() {
    return new FormGroup({
      fName: new FormControl(null),
      lName: new FormControl(null),
      email: new FormControl(null),
      docType: new FormControl(null),
      docNumber: new FormControl(null)
    });
  }
}
