
import { invalid } from '@angular/compiler/src/render3/view/util';
import { AbstractControl } from '@angular/forms';


export class PasswordValidation
{
   
     PasswordConfirming(AC:AbstractControl)
    {
        if(AC.get('Password')?.value != AC.get('ConfirmPassword')?.value)
        {
            return {invalid: true};
        }
        return {invalid: false};
    }
}
//import { ActionSequence } from 'selenium-webdriver';



////export class PasswordValidation {


//    static MatchPassword(AC:AbstractControl)
//    {
//        let password = AC.get('Password')?.value;
// if(AC.get('ConfirmPassword')?.touched || AC.get('ConfirmPassword')?.dirty)
// {
//     let verifypassword = AC.get('ConfirmPassword')?.value;
//     if(password != verifypassword)
//     {
//         AC.get('ConfirmPassword')?.setErrors({MatchPassword:true})
//     }
//     else{
//         return null
//     }
    
// }
// return false
//    }
//}

