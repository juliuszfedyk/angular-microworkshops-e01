import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup} from '@angular/forms';

const TOUR_TYPES = [
    {name: 'Shark diving', id: 'sharks'},
    {name: 'Walk in park', id: 'park'},
    {name: 'Foodie heaven', id: 'restaurant'},
];

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
    tourForm: FormGroup;
    tourTypes: any[];

    constructor() {
        this.tourForm = new FormGroup({
            tourType: new FormControl('sharks'),
            email: new FormControl('myemail@example.com'),
            participants: new FormArray([])
        });

        this.tourTypes = TOUR_TYPES;
    }

    ngOnInit() {
    }

    get participants() {
        return this.tourForm.controls.participants as FormArray;
    }

    addParticipant() {
        const participants = this.tourForm.controls.participants as FormArray;
        participants.push(this.newParticipant());
    }

    newParticipant() {
        return new FormGroup({
            firstName: new FormControl(null),
            lastName: new FormControl(null),
            idType: new FormControl(null),
            idNumber: new FormControl(null)
        });
    }

    onSubmit() {
        console.log(this.tourForm);
    }

}
