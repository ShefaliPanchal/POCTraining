import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegistrationComponentComponent} from './registration-component/registration-component.component'
import {LoginComponentComponent} from './login-component/login-component.component'
import { AuthGuard } from './auth.guard';
import {NewComponentComponent} from './new-component/new-component.component'
import {ConsultantComponent} from './consultant/consultant.component'
import { AddConsultantComponent } from './add-consultant/add-consultant.component';
const routes: Routes = [
  { path: 'registration',component: RegistrationComponentComponent },
  { path:'',component : LoginComponentComponent},
  { path:'login',component : LoginComponentComponent},
  { path: 'dashboard', component:NewComponentComponent, canActivate: [AuthGuard],
  children: [
    { path: 'consultant', component: ConsultantComponent,canActivate: [AuthGuard] },
    {path:'addconsultant',component:AddConsultantComponent,canActivate:[AuthGuard]},
    { path: 'addconsultant/:id', component: AddConsultantComponent, canActivate:[AuthGuard]},
  ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
