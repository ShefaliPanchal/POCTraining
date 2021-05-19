import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserModule,By} from '@angular/platform-browser';
import { RegistrationComponentComponent } from './registration-component.component';

describe('RegistrationComponentComponent', () => {
  let component: RegistrationComponentComponent;
  let fixture: ComponentFixture<RegistrationComponentComponent>;
  let el:HTMLElement;
  let de:DebugElement;

  beforeEach(async () =>{
    TestBed.configureTestingModule({
      declarations:[
        RegistrationComponentComponent
      ],
      imports:[
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
      ]
    }).compileComponents().then(()=>{
      fixture = TestBed.createComponent(RegistrationComponentComponent);
      component=fixture.componentInstance;
      de=fixture.debugElement.query(By.css('form'));
      el=de.nativeElement;
    })
  })

  // beforeEach(async () => {
  //   await TestBed.configureTestingModule({
  //     declarations: [ RegistrationComponentComponent ]
  //   })
  //   .compileComponents();
  // });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the onsubmit method',async () => {
    fixture.detectChanges();
    spyOn(component,'onSubmit');
    el=fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(component.submitted).toBeTruthy();
  })

  it('form should be invalid',async()=>{
    component.form.controls['FisrtName'].setValue('');
    component.form.controls['LastName'].setValue('');
    component.form.controls['dateOfBirth'].setValue('');
    component.form.controls['Email'].setValue('');
    component.form.controls['Password'].setValue('');
    expect(component.form.valid).toBeFalsy();
  })

  it('form should be valid',async()=>{
    component.form.controls['FisrtName'].setValue('Rajvi');
    component.form.controls['LastName'].setValue('Panchal');
    component.form.controls['dateOfBirth'].setValue('1993-03-05');
    component.form.controls['Email'].setValue('rajvipatel@gmail.com');
    component.form.controls['Password'].setValue('Admin@1234');
    component.form.controls['ConfirmPassword'].setValue('Admin@1234');
    expect(component.form.valid).toBeFalsy();
  })

});
