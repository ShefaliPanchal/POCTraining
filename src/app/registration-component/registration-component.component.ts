import { Component, Inject, OnInit } from '@angular/core';
import { EmailValidator, FormControl,FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { Registeration } from '../registration-component/registeration';
import { RegisterationService } from 'src/Services/registeration.service';
 import {MustMatch} from './must-match-Validator';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { NgxSpinnerService } from "ngx-spinner";  

@Component({
  selector: 'app-registration-component',
  templateUrl: './registration-component.component.html',
  styleUrls: ['./registration-component.component.css']
})

export class RegistrationComponentComponent implements OnInit {
  public registerationForm!: FormGroup;
  public form!: FormGroup;
  submitted = false;
  minPw = 6;
  hide = true;
  confirmhide = true;
  constructor(private location : Location,private registerationService : RegisterationService,
    private formBuilder: FormBuilder,public dialog: MatDialog,private SpinnerService: NgxSpinnerService) { }

  ngOnInit() {
    this.form =this.formBuilder.group({
      FisrtName: new FormControl('', Validators.required),
      LastName: new FormControl('', Validators.required),
      dateOfBirth: new FormControl(new Date()),
      Email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
     
       Password: new FormControl('', [
        Validators.required,
       Validators.minLength(this.minPw)
    ]),
      ConfirmPassword: new FormControl('', [
        Validators.required,
       Validators.minLength(this.minPw)
      ])
    },{validators:MustMatch('Password','ConfirmPassword')}
    );
  
  }
  get f() {
   return this.form.controls; }
  public hasError = (controlName: string, errorName: string) =>{
    return this.registerationForm?.controls[controlName].hasError(errorName);
  }
  
  onSubmit(){
    this.SpinnerService.show();
    let registeration: Registeration = {
      FisrtName: this.form?.value.FisrtName,
      LastName: this.form?.value.LastName,
      DateOfBirth: this.form?.value.dateOfBirth,
      Email:this.form?.value.Email,
      Password:this.form?.value.Password,
      CandidateId:0
      }

let baseURL="http://localhost:38230/Authenticate/register";
    this.registerationService.create(baseURL,registeration)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
          this.form.reset();
          this.SpinnerService.hide();
           this.dialog.open(DialogDataExampleDialog, {
            data: {
              msg: 'Candidate Added Successfully'
            }
          });
        },
        error => {
          this.SpinnerService.hide();
          console.log(error);
        });
  }
}

export interface DialogData {
  msg: 'data saved successfully';
}

@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: 'dialog-data-example-dialog.html',
})
export class DialogDataExampleDialog {
  constructor(public dialog: MatDialog) {}
}

