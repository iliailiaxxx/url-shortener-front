import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiCommunicationService {

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get("/api/profiles")
  }
  postData(input:object) {
    return this.http.post("/api/profiles", input)
  }
  updateData(input: object,id:number) {
    return this.http.put(`/api/profiles/${id}`, input)
  }
  deleteData(id: number) {
    return this.http.delete(`/api/profiles/${id}`)
  }
}
