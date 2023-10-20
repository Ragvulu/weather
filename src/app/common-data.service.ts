import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonDataService {
  apiurl="http://localhost:3000/users"; 

  constructor(private http:HttpClient){}
  
  getdata(){
    return this.http.get(this.apiurl);
  }
  
  postdata(user:any){
    return this.http.post(this.apiurl, user)
  }
  
  update(id:any, user:any){
    return this.http.put(`${this.apiurl}/${id}`, user)
  }
  
  delete(id:any, user:any){
    return this.http.delete(`${this.apiurl}/${id}`, user)
  }
    
    
  
}
