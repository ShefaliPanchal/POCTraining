import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router,ActivatedRoute  } from '@angular/router';
import {ConsultantModel} from '../ConsultantModel';
import { RegisterationService } from 'src/Services/registeration.service';
import { NgxSpinnerService } from "ngx-spinner";  

@Component({
  selector: 'app-add-consultant',
  templateUrl: './add-consultant.component.html',
  styleUrls: ['./add-consultant.component.css']
})
export class AddConsultantComponent implements OnInit {
  consultationform!: FormGroup;
 consultantId:number | undefined;
  constructor(
    private router: Router,private registerationService:RegisterationService,
    private actRoute: ActivatedRoute ,private SpinnerService: NgxSpinnerService
  ) { 
    this.consultantId = this.actRoute.snapshot.params.id;
   if(this.consultantId != null || this.consultantId != undefined)
   {
     //bind the formgroup
     let baseURL="http://localhost:38230/Consultant/GetConsultantMasterById/"+this.consultantId;
     this.registerationService.readAll(baseURL)
     .subscribe(
       response => {
         console.log(response);
         if(response != null)
         this.consultationform.setValue({ConsultantId:response.consultantId,FisrtName: response.fisrtName, LastName:  response.lastName ,Email : response.email,IsActive:response.isActive});
       },
       error => {
        alert(error.statusText);
       });
   }
   }

  ngOnInit(): void {
    this.consultationform = new FormGroup({
      ConsultantId:new FormControl(0),
      FisrtName: new FormControl('', Validators.required),
      LastName: new FormControl('', Validators.required),
      Email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      IsActive: new FormControl(false,Validators.requiredTrue)
    }, 
    );
  }

  onSubmit(){
    this.SpinnerService.show();  
    let registeration: ConsultantModel = {
      ConsultantId:this.consultationform?.value.ConsultantId,
      FisrtName: this.consultationform?.value.FisrtName,
      LastName: this.consultationform?.value.LastName,
      Email:this.consultationform?.value.Email,
      IsActive:this.consultationform?.value.IsActive,
      }
      let baseURL;
      if(registeration.ConsultantId == 0)
      {
     baseURL="http://localhost:38230/Consultant/InsertConsultantMaster"
      }
      else{
     baseURL="http://localhost:38230/Consultant/UpdateConsultantMaster"
      }
    this.registerationService.create(baseURL,registeration)
      .subscribe(
        response => {
          console.log(response);
          this.consultationform.reset();
          if(registeration.ConsultantId == 0)
          {
          alert('Consultant Added Successfully');
          }
          else{
          alert('Consultant Updated Successfully');
          }
          this.SpinnerService.hide();  
          this.router.navigateByUrl("/dashboard/consultant")
        },
        error => {
          console.log(error);
        });
  }
}
