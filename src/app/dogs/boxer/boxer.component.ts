import { Component, OnInit } from '@angular/core';
import { DogsService } from '../../dogs.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-boxer',
  templateUrl: './boxer.component.html',
  styleUrls: ['./boxer.component.css']
})
export class BoxerComponent implements OnInit {

  private form: FormGroup;
  private dogs: string[] = [];
  constructor(private dogService: DogsService) { }

  ngOnInit() {
    this.dogService.getBoxers().subscribe(dogs => this.dogs = dogs);
    this.form = new FormGroup({
      dogs: new FormControl(5)
    });
  }

  refresh(): void {
    const limit = this.form.get('dogs').value as number;
    this.dogService.getBoxers(limit).subscribe(dogs => this.dogs = dogs);
  }
}
