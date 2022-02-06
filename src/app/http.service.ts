import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import axios, { Axios } from 'axios';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
hero:any;
  constructor(private http: HttpClient) { }

  async getData() {
      const response = await axios.get("http://localhost:5007/api/auth/TestMeth");    
      console.log(response.data);
  }
  

}
