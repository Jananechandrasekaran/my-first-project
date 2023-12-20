import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.scss']
})
export class StudentdetailsComponent {

  constructor(private httpClient : HttpClient, private router : Router){}


  Name:any;
  Standard:any;
  Section:any;
  Phonenumber:any;
  Address:any;
  Email:any;
  Password:any;


  clear(){

    this.Name="";
    this.Standard="";
    this.Section="";
    this.Phonenumber="";
    this.Address="";
    this.Email="";
    this.Password="";
  }

  validateUserData() {
    if(this.Name!= '' && this.Standard != '' && this.Section != '' 
      && this.Phonenumber != '' && this.Address != '' 
      && this.Email!="" && this.Password!=""){
        return true;
       }
      else{
        alert("Need all data and Password and Confirm Password should be same");
      }
    return false;
  }
register(){
  if(this.validateUserData()){

    let register ={

      Name:this.Name,
      Standard:this.Standard,
      Section:this.Section,
      Phonenumber:this.Phonenumber,
      Address:this.Address,
      Email:this.Email,
      Password:this.Password

    }

    this.httpClient.post("https://retoolapi.dev/1h80D7/register",register).subscribe(
        () => {
          alert("Registered Successfully... Please Login to continue....");
          setTimeout(()=>{
            this.router.navigate(['']);
          }, 3000);
        },
        () => {
          alert("Encounterd a problem. Unable to create a user at this moment... Mannichooo... Plz try try again.");
        }
      );
    }
  }


}
