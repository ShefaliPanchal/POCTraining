import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { RegisterationService } from 'src/Services/registeration.service';
import { User } from '../user';
import { NgxSpinnerService } from "ngx-spinner";  
@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})

export class LoginComponentComponent implements OnInit {
  loginform!: FormGroup;
  isSubmitted  =  false;
  constructor(private authService: AuthService,private registerationService:RegisterationService, 
    private router: Router, private formBuilder: FormBuilder,private SpinnerService: NgxSpinnerService) { }

  ngOnInit(): void {
    this.loginform  =  new FormGroup({
      Email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      Password: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ])
  });
  }

  onSubmit(){
    this.SpinnerService.show();
    this.isSubmitted = true;

    let registeration: User = {
      Email:this.loginform?.value.Email,
      Password:this.loginform?.value.Password,
      }

      this.registerationService.login(registeration)
      .subscribe(
        response => {
          console.log(response);
          this.authService.signIn(response.token);
          this.SpinnerService.hide();
          this.router.navigateByUrl('/dashboard');
        },
        error => {
          this.SpinnerService.hide();
         alert(error.statusText);
        });
  }

}
