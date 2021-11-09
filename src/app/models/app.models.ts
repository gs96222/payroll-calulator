export interface PayrollForm{
    experience: number,
    profession: string,
    location: string,
    incomeYear: string
}

export class PayrollInfo{
    totalSalary: number;
    payrollTax: number;
    netSalary: number;
    location: string;
    incomeYear: string;
}
