import { AbstractControl, ValidationErrors } from '@angular/forms';  
    
export class NameWhiteSpace {  
    static noSpaceAllowed(control: AbstractControl) : ValidationErrors | null {  
        if((control.value as string).indexOf(' ') >=0){  
            return {noSpaceAllowed: true}  
        }  
    
        return null;  
    } 
    
    static dateMaxYear(year: string): any {
        return (control: AbstractControl) : ValidationErrors | null => {  
            if(control.value.split('-')[1] <= year){  
                return {dateMaxYear: true}  
            }  
        
            return null;    
        }  
    }
}