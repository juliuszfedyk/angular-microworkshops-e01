import { Component, Inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
  FormArray
} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  public myFormGroup: FormGroup;

  ngOnInit(): void {
    this.myFormGroup = new FormGroup({
      bookingOwnerEmail: new FormControl(null),
      bookingOwnerFName: new FormControl(null),
      //bookingOwnerLName: new FormControl(null, { validators: [this.onlyJohnValidator(this.myFormGroup)] }),
      participants: new FormArray([])
    });

    const lastName = new FormControl(null, { validators: [this.onlyJohnValidator()] });
    this.myFormGroup.addControl("bookingOwnerLName", lastName);
  }

  get participants(): FormArray {
    return this.myFormGroup.get('participants') as FormArray;
  }
  addParticipant() {
    this.participants.push(this.newParticipant());
  }
  newParticipant() {
    return new FormGroup({
      fName: new FormControl(null, {
        validators: Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z]+$')
        ])
      }),
      lName: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.email, Validators.required]),
      docType: new FormControl(null),
      docNumber: new FormControl(null)
    });
  }

  private onlyJohnValidator(): any {
    return (control: FormControl): { [key: string]: any } => {
      // or use return Validators.nullValidator

      const firstName = this.myFormGroup.get('bookingOwnerFName') as FormControl;

      if (firstName.value === 'John') {
        return Validators.nullValidator;
      }

      return { onlyJohnValidator: 'No john' };
      // var invalidWOrds = words.map(w => control.value.includes(w) ? w : null);
      // return invalidWords && invalidWords.length > 0 ?
      //   { restrictedWords: invalidWords.join(",") } : null;
    };
}
