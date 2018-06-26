import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  public myFormGroup: FormGroup;
  constructor(@Inject(FormBuilder) private fb: FormBuilder) {
    this.myFormGroup = fb.group({
      tourType: fb.control(null, Validators.required),
      email: fb.control(null, Validators.email),
      participants: fb.array([])
    });
  }
  newParticipant(): FormGroup {
    return this.fb.group({
      firstName: this.fb.control(null),
      lastName: this.fb.control(null),
      idType: this.fb.control('passport'),
      idNumber: this.fb.control(null)
    });
  }

}
