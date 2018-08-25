import { Component, OnInit } from '@angular/core';
import { DogsService } from '../../dogs.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-hound',
  templateUrl: './hound.component.html',
  styleUrls: ['./hound.component.css']
})
export class HoundComponent implements OnInit {
  // TODO: Use an HTTP Interceptor instead
  private hasError: boolean = false;
  private form: FormGroup;
  private dogs: string[] = [];
  constructor(private dogService: DogsService, private router: Router) { }

  ngOnInit() {
    this.dogService.getHounds().subscribe(dogs => this.dogs = dogs, error => this.toggleError);
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
    const limit = this.form.get('dogs').value as number;
    this.dogService.getHounds(limit).subscribe(dogs => this.dogs = dogs, error => this.toggleError);
  }
}