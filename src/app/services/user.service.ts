import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {User} from '../models/user.model';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService: HttpClient) {
  }

  public getUser(id: number): Observable<User> {
    return this.httpService.get<User>(`http://localhost:3000/user/${id}`).pipe(
      map(data => new User().deserialize(data)),
      catchError(() => throwError('User not found'))
    );
  }

  public getAllUsers(): Observable<User[]> {
    return this.httpService.get<User[]>(`http://localhost:3000/users`).pipe(
      map(data => data.map(data => new User().deserialize(data)))
    );
  }
}
