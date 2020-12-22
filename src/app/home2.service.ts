import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Home2Service {

  private readonly API = 'http://localhost:8080';

  constructor(private http: HttpClient) { }


  list(valor) {
      this.http.post(this.API,valor)

    }

  
}
