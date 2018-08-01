import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

type IdType = "Passport" | "Id";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private form: FormGroup;
  private participants: FormArray;
  private idType: IdType;
  private idTypes: IdType[] = ["Passport", "Id"];
  private roomTypes: string[] = ["1-bed", "2-bed", "Suite"];
  private foods: string[] = ["Breakfast", "Lunch", "Breakfast + Lunch"];
  private activities: string[] = ["Yoga classes", "Spa", "Pool", "Windsurfing"];
  private extras: string[] = ["Stone message"];
  private selectedExtras: string[] = [];

  ngOnInit() {
    this.form = new FormGroup({
      participants: new FormArray([this.createParticipants()]),
      roomType: new FormControl(null, Validators.required),
      food: new FormControl(null, Validators.required),
      activities: this.createActivities(),
      spa: new FormControl()
    });
  }

  private createParticipants(): FormGroup {
    return new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      idType: new FormControl(this.idType, Validators.required),
      docNumber: new FormControl(null, Validators.required)
    });
  }

  private createActivities(): FormGroup {
    let group = new FormGroup({});
    this.activities.forEach((activity, index) => {
        group.addControl(`activity-${index}`, new FormControl(false))
    });

    return group;
  }

  addParticipant(): void {
    this.participants = this.form.get('participants') as FormArray;
    this.participants.push(this.createParticipants());
  }

  removeParticipantAt(index: number): void {
    this.participants = this.form.get('participants') as FormArray;
    this.participants.removeAt(index);
  }

  addExtras() {
    const selected = this.form.get('spa') as FormControl;
    this.selectedExtras.push(selected.value);
    selected.reset();
  }

  removeExtraAt(index: number) {
    this.selectedExtras.splice(index, 1);
  }

  isParticipantValidAt(index: number, field: string, errorCode: string): boolean {
    this.participants = this.form.get('participants') as FormArray;
    const participant = this.participants.at(index).get(field) as FormControl;
    if(participant === null) return false;
    return !participant.pristine && participant.hasError(errorCode);
  }

  onSubmit() {
    console.log("Form is submitted");
  }

}
