import { tap, first, delay} from 'rxjs'
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Course } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private readonly API = '/assets/cursos.json';

  constructor(private httpClient: HttpClient) { }

  list() {
    return  this.httpClient.get<Course[]>(this.API)
    .pipe(
      first(),
      delay(1500),
      tap(cursos => console.log(cursos))
    );
  }
}
