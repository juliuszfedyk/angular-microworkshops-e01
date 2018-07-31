import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-participant',
  templateUrl: './participant.component.html',
  styleUrls: ['./participant.component.scss']
})
export class ParticipantComponent implements OnInit {
  @Input() participant: FormGroup;

  ngOnInit(): void {
   // this.participant.get('docType').setValidators(this.onlyJohnValidator);
  }
}
