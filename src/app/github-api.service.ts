import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class GithubApiService {
  private baseUrl = 'https://api.github.com/users/';

  constructor(private http: HttpClient) {}

  getUser(username: string): Observable<any> {
    return this.http.get<any>(`<span class="math-inline">\{this\.baseUrl\}</span>{username}`);
  }
}