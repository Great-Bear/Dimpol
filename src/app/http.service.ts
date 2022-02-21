import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, ObservableInput } from 'rxjs';
import axios, { Axios } from 'axios';
import { AuthUserResponse } from "src/app/auth-user-response";

import { catchError} from 'rxjs/operators';


import { HttpErrorResponse } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Response-Type' : 'json',
  })
}

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
  }

   getData() {
      const response = this.http.get("/api/auth/TestMeth");
      response.subscribe(res => console.log("Это ответ Get:" + res));
  }
  registerUser( data : object ){

        return this.http.post("/api/auth/register", JSON.stringify( data ), httpOptions )
                      .pipe( res => { return res;  }, 
                        catchError(err => {   
                          return err.message;
                      })                
                    )}

  authUser( data : object ){
    return this.http.post("api/auth/login", JSON.stringify( data ), httpOptions )
                .pipe( res => { return res; },                
                  catchError(err => {   
                    return "Server is death";
                }) 
              )}

  confirmEmail(data : object){
      return this.http.post("/api/auth/confirm", JSON.stringify( data ), httpOptions )
                .pipe( res => { return res; }, err => { return err } ) ;
  }


}
