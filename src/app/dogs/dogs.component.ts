import { Component, OnInit } from '@angular/core';
import { DogsService } from '../dogs.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DogsComponent implements OnInit {
  private form: FormGroup;
  private dogs: string[] = [];
  constructor(private dogService: DogsService) { }

  ngOnInit() {
    this.dogService.getDogs().subscribe(dogs => this.dogs = dogs);
    this.form = new FormGroup({
      dogs: new FormControl(5)
    });
  }

  refresh(): void {
    const limit = this.form.get('dogs').value as number;
    this.dogService.getDogs(limit).subscribe(dogs => this.dogs = dogs);
  }
}
