import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  salary : number;
  constructor() { }

  ngOnInit(): void {
  }

  netSalary(value){
    this.salary = value;
    console.log(value);
  }

}
