import { Component, OnInit,Pipe } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { RegisterationService } from 'src/Services/registeration.service';
import { NgxSpinnerService } from "ngx-spinner";  

@Component({
  selector: 'app-consultant',
  templateUrl: './consultant.component.html',
  styleUrls: ['./consultant.component.css']
})
export class ConsultantComponent implements OnInit {
  consultant:any;
  term:string='';
  constructor(private authService: AuthService,
    private registerationService:RegisterationService, 
    private router: Router, private formBuilder: FormBuilder, private SpinnerService: NgxSpinnerService){ 
     this.getAll();
    }

  ngOnInit(): void {
  }

   getAll()
  {
    let baseURL='http://localhost:38230/Consultant/GetConsultantDetails'
    this.registerationService.readAll(baseURL)
    .subscribe(
      response => {
        console.log(response.result1);
        this.consultant=response.result1;
      },
      error => {
       alert(error.statusText);
      });
  }
  
  deleteConsultant(id:any)
  {
    this.SpinnerService.show();  
    let baseURL="http://localhost:38230/Consultant/DeleteConsultantMaster/"+id;
    this.registerationService.deleteAll(baseURL,'')
     .subscribe(
       response => {
        alert("Consultant Deleted Successfully");
        this.getAll();
        this.SpinnerService.hide();  
       },
       error => {
        alert(error.statusText);
       });
  }
}
