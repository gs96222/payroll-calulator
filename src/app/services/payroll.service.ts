import { Injectable } from '@angular/core';
import { BASIC_SALARY, EXTRA_TAX, LOCATION_TAX } from '../constants/constant';
import { PayrollForm, PayrollInfo } from '../models/app.models';
import { UtilityService } from './utility.service';


@Injectable({
  providedIn: 'root'
})
export class PayrollService {
  constructor( private utilityService: UtilityService) {
   }

   calculateSalary(payrollForm: PayrollForm){
    const payroll = new PayrollInfo()
    const basicSalary = BASIC_SALARY[payrollForm.profession.toUpperCase() as "DEVELOPER"];
    payroll.totalSalary = this.utilityService.expereincedIncrementSalary(payrollForm.experience, basicSalary);

    payroll.netSalary = this.salaryAfterIncomeTax(payroll.totalSalary, payrollForm.location, payrollForm.incomeYear);
    payroll.payrollTax = payroll.totalSalary - payroll.netSalary;
    payroll.location = payrollForm.location;
    payroll.incomeYear = payrollForm.incomeYear;
    return payroll;
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
  
}