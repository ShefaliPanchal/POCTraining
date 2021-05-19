import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
  
@Component({
  selector: 'app-new-component',
  templateUrl: './new-component.component.html',
  styleUrls: ['./new-component.component.css']
})
export class NewComponentComponent implements OnInit {

  constructor(private authservice:AuthService,private router:Router) { }
  consultantcount : number = 20;

  ngOnInit(): void {
  }

  logout()
  {
    this.authservice.logout();
    this.router.navigateByUrl("");
  }
}
