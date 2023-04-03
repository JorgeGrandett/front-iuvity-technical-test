import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getById(id: number) {
    return this.http.get(`${environment.url_api}/user/${id}`);
  }

  getAll() {
    return this.http.get(`${environment.url_api}/user/list-users`);
  }

  createUser(data: any): Observable<any> {
    return this.http.post(`${environment.url_api}/user/create-user`, data);
  }

  updateUser(id: number, data: any): Observable<any> {
    return this.http.put(`${environment.url_api}/user/update-user/${id}`, data);
  }

  deleteUser(id: number) {
    return this.http.delete(`${environment.url_api}/user/delete-user/${id}`);
  }
}
