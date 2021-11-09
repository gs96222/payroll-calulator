import { Component, OnInit } from '@angular/core';
import { PayrollInfo } from 'src/app/models/app.models';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  salaryDetails : PayrollInfo;
  constructor() { }

  ngOnInit(): void {
  }

  netSalary(value){
    this.salaryDetails = value;
  }

}
