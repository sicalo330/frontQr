import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConectionService {

  constructor(private http:HttpClient) { }

  conection(post:any): Observable<any>{
    return this.http.post('http://localhost:4040/generateQr', {post:post})
  }
}
