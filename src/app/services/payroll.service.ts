import { Injectable } from '@angular/core';
import { BASIC_SALARY, EXTRA_TAX, HIKE_PERCENT, LOCATION_TAX } from '../constants/constant';
import { PayrollForm } from '../models/app.models';
import { UtilityService } from './utility.service';


@Injectable({
  providedIn: 'root'
})
export class PayrollService {
  constructor( private utilityService: UtilityService) {
   }

   calculateSalary(payrollForm: PayrollForm){
    const basicSalary = BASIC_SALARY[payrollForm.profession.toUpperCase() as "DEVELOPER"];
    const newSalary = this.utilityService.expereincedIncrementSalary(payrollForm.experience, basicSalary);

    return this.salaryAfterIncomeTax(newSalary, payrollForm.location, payrollForm.incomeYear);
   }

   salaryAfterIncomeTax(salary: number, location: string, year: string){
       const locationTax = LOCATION_TAX[`${location.toUpperCase()}_${year}`];
       if(salary <= 36000){
           return this.utilityService.getAmountAfterTax(salary, locationTax)
       }else if(salary >= 36000 && salary <= 45000){
           return this.utilityService.getAmountAfterTax(36000, locationTax) + this.utilityService.getAmountAfterTax((salary-36000),EXTRA_TAX.CATEGORY_2) 
       }else{
        return this.utilityService.getAmountAfterTax(36000, locationTax) + this.utilityService.getAmountAfterTax((45000-36000),EXTRA_TAX.CATEGORY_2) + this.utilityService.getAmountAfterTax((salary-45000),EXTRA_TAX.CATEGORY_3)
       }
   }

//    getAmountAfterTax(amount: number, tax:number){
//         return amount*(1-tax);
//    }

//    expereincedIncrementSalary(experience: number, basic: number){
//     return basic + this.getExpereinceHikePercent(experience) * basic;
//    }

//    getExpereinceHikePercent(experience: number){
//     if(experience >= 0 && experience <=3){
//         return HIKE_PERCENT.CATEGORY_1;
//     }else if(experience >= 4 && experience <=7){
//         return HIKE_PERCENT.CATEGORY_2;
//     }if(experience >= 8 && experience <=10){
//         return HIKE_PERCENT.CATEGORY_3;
//     }else{
//         return HIKE_PERCENT.CATEGORY_4;
//     }
//    }
  
}