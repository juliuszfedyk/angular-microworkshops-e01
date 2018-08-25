import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

type DogViewModel = {
  status: string,
  message: string[]
}

@Injectable({
  providedIn: 'root'
})
export class DogsService {
  private url: string = "https://ng-workshop-3.azurewebsites.net/";
  constructor(private http: HttpClient) { }

  getDogs(limit: number = 5): Observable<string[]> {
    return this.http.get<DogViewModel>(`${this.url}/api/dogs?limit=${limit}`)
      .pipe(map(data => data.message));
  }

  getHounds(limit: number = 5): Observable<string[]> {
    return this.http.get<DogViewModel>(`${this.url}/api/dogs/hound?limit=${limit}`)
      .pipe(map(data => data.message));
  }

  getBoxers(limit: number = 5): Observable<string[]> {
    return this.http.get<DogViewModel>(`${this.url}/api/dogs/boxer?limit=${limit}`)
      .pipe(map(data => data.message));
  }
}
