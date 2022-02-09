import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.service';

import { AuthUserResponse } from "src/app/auth-user-response";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private http: HttpService) { }

  login : string="userexample.com";
  value2 : string = "string";


  authUserResponse : AuthUserResponse = new AuthUserResponse();

  ngOnInit(): void {
  }

  sendData(){

    const body = { login : this.login, password : this.value2 }
    this.http.getData();
    this.http.authUser( body )
             .subscribe( authUserResponse  => { 
              if( authUserResponse instanceof AuthUserResponse ) {
                console.log(authUserResponse.error);
              }
              console.log( authUserResponse + "fdsafsd" )
            }
              );
              
  }


}
