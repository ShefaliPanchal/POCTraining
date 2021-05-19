import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistrationComponentComponent } from './registration-component/registration-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NewComponentComponent } from './new-component/new-component.component';
import { FormsModule } from '@angular/forms';
import { MyMaterialModule } from './material.module';
import {ConsultantComponent} from './consultant/consultant.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {AddConsultantComponent} from './add-consultant/add-consultant.component';
import { NgxSpinnerModule } from "ngx-spinner"; 
import { Ng2SearchPipeModule } from 'ng2-search-filter';
@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponentComponent,
    LoginComponentComponent,
    NewComponentComponent,
    ConsultantComponent,
    AddConsultantComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MyMaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    NgxSpinnerModule ,
    Ng2SearchPipeModule
  ],
  providers: [],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
