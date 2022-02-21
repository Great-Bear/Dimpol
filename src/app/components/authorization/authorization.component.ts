import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit {


  constructor(private httpSevice: HttpService) { }

  login : string = "";
  passwd : string = "";

  ngOnInit(): void {
  }

  sendDataAuth(){

    const body = { login : this.login, password : this.passwd }
    let subRegUsr = this.httpSevice.authUser( body )
             .subscribe( authUserResponse  => { 
              
              if("Server is death"){
                subRegUsr.unsubscribe();
                console.log("Show message error server");
              }
            });
              
  }

}
