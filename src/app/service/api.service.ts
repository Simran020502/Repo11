import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  

  constructor(private http: HttpClient) { }


    getData(): Promise <any> {
      return new Promise((resolve, reject)=>{
        this.http.get('https://api.github.com/users/Simran020502/repos')
        .pipe(map((Response)=> Response))
        .subscribe((response: any)=>{
          resolve(response);
        },reject)
    })
  
}
}
