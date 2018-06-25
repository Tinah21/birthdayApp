import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class InfoService {
//inject http
  constructor(private http: Http) {}

    getUser() {
      return  this.http.get(`https://conduit.productionready.io/api/profiles/eric`).pipe(map(res =>{
        return res.json()
      }))
  
    
    }

  
}
