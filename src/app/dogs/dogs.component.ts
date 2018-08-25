import { Component, OnInit } from '@angular/core';
import { DogsService } from '../dogs.service';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DogsComponent implements OnInit {
  // TODO: Use an HTTP Interceptor instead
  private hasError: boolean = false;
  private form: FormGroup;
  private dogs: string[] = [];
  constructor(private dogService: DogsService) { }

  ngOnInit() {
    this.dogService.getDogs()
      .subscribe(
        dogs => this.dogs = dogs,
        error => this.toggleError);
    this.form = new FormGroup({
      dogs: new FormControl(5)
    });
  }

  toggleError(error: any): void {
    if (error instanceof HttpErrorResponse) {
      this.hasError = true;
    }
  }

  refresh(): void {
    this.hasError = false;
    const limit = this.form.get('dogs').value as number;
    this.dogService.getDogs(limit)
      .subscribe(
        dogs => this.dogs = dogs,
        error => this.toggleError);
  }
}