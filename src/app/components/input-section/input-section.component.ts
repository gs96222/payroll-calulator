import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder , FormGroup, Validators } from '@angular/forms';
import { PayrollService } from 'src/app/services/payroll.service';
@Component({
  selector: 'app-input-section',
  templateUrl: './input-section.component.html',
  styleUrls: ['./input-section.component.scss']
})
export class InputSectionComponent implements OnInit {
  payrollForm!: FormGroup;
  locations: string[] = ["stockholm","gothenburg"];
  years: string[] = ["2016","2017"];
  @Output() salaryStatus = new EventEmitter<number>();
  constructor(private fb: FormBuilder,private payrollService: PayrollService) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.payrollForm = this.fb.group({
      experience: ['', Validators.required],
      profession: ['developer', Validators.required],
      location: ['', Validators.required],
      incomeYear: ['', Validators.required],
    });
  }

  onSubmit(){
    if(!this.payrollForm.valid){
      return;
    }
    console.log(this.payrollForm.value)
   const netSalary = this.payrollService.calculateSalary(this.payrollForm.value);
    this.salaryStatus.emit(netSalary);
  }

}
