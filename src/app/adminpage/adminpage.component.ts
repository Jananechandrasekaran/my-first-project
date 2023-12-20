import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.scss']
})
export class AdminpageComponent {
  
  constructor(private httpClient : HttpClient, private router : Router){}

  addstudent(){
    this.router.navigate(['/studentdetails']);
  }

}
