import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { TodoUser } from '../interfaces/todouser';

@Injectable({
  providedIn: 'root',
})
export class TodoUserService {
  constructor(private http: HttpClient) {}
  apiUrl: string = 'https://jsonplaceholder.typicode.com/todos';

  getAllList(): Observable<TodoUser[]> {
    return this.http
      .get<TodoUser[]>(this.apiUrl)
      .pipe(catchError(this.handleError));
  }
  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    return throwError('Something bad happened; please try again later.');
  }
}
