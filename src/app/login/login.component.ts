import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent{
 // url:('https://retoolapi.dev/B9WI1v/data');
 constructor(private httpClient : HttpClient, private router : Router){}

 Name:any;
 Password:any;
 url:string=("https://retoolapi.dev/1h80D7/register");

 clear(){

   this.Name="";
   this.Password="";
 }

 validateUserData() {
   if(this.Name!="" && this.Password!=""){
       return true;
      }
     else{
       alert("Please enter all the data");
     }
   return false;
 }
login(){
  if(this.Name != '' && this.Password != ''){
    let apiUrl = this.url + "?Name=" + this.Name + "&Password=" + this.Password;
    this.httpClient.get(apiUrl).subscribe(
      (data : any)=> {
        console.log(data);
        if(data.length > 0 && data[0].Name == this.Name && data[0].Password == this.Password){
          sessionStorage.setItem('userMobile', data[0].mobile);
          this.router.navigate(['/studentdetails']);
        }else{
         alert( "Invalid UserName or Password...");
        }
      },
      () => {}
    );
  }else{
    alert( "Username or Password is missing...");
  }
 }
}