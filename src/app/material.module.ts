import { NgModule } from  '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon'
import {MatDatepickerModule} from  '@angular/material/datepicker';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import{MatFormFieldModule} from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import{MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatRadioModule} from '@angular/material/radio';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
imports: [MatNativeDateModule,MatButtonModule,MatToolbarModule,MatDatepickerModule,MatIconModule,MatCheckboxModule,MatCardModule,MatFormFieldModule,MatInputModule,MatListModule,MatRadioModule,MatSidenavModule,MatDialogModule],
exports: [MatNativeDateModule,MatButtonModule,MatToolbarModule,MatDatepickerModule,MatIconModule,MatCheckboxModule,MatCardModule,MatFormFieldModule,MatInputModule,MatListModule,MatRadioModule,MatSidenavModule,MatDialogModule],
 
})
 
export  class  MyMaterialModule { }