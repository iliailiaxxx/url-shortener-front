import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, throwError } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ApiCommunicationService {

    constructor(private http: HttpClient) { }


    postUrl(url: any): Observable<any> {
        return this.http.post("http://localhost:3000/", url)
    }
    
}
