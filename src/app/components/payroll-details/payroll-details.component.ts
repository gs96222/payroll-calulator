import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts/'
import { PayrollInfo } from 'src/app/models/app.models';

@Component({
  selector: 'app-payroll-details',
  templateUrl: './payroll-details.component.html',
  styleUrls: ['./payroll-details.component.scss']
})
export class PayrollDetailsComponent implements OnInit {
  @Input() salaryDetails: PayrollInfo;
  constructor() { }

  ngOnInit(): void {
    this.createChart()
  }

  ngOnChanges(){
    if(this.salaryDetails){
      this.createChart(this.salaryDetails?.payrollTax, this.salaryDetails?.netSalary, this.salaryDetails.incomeYear)
    }
  }

  createChart(payrollTax= 50, netsalary = 50, incomeYear="N/A"){
    Highcharts.setOptions({
      colors: ['orange', 'green']
     });
    Highcharts.chart('chart', {
      credits: {
        enabled: false
      },
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: 0,
        plotShadow: false,
        backgroundColor: "#393d44",
        margin: 0,
      },
      title: {
        text: `Salary<br>Structure<br>${incomeYear}`,
        align: 'center',
        verticalAlign: 'middle',
        y: 60,
        style: {
          fontWeight: '100',
          color: 'white'
        }
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      accessibility: {
        point: {
          valueSuffix: '%'
        }
      },
      plotOptions: {
        pie: {
          dataLabels: {
            enabled: true,
            distance: -40,
            style: {
              fontWeight: 'bold',
              color: 'white'
            }
          },
          startAngle: -90,
          endAngle: 90,
          center: ['50%', '75%'],
          size: '125%'
        }
      },
      series: [{
        type: 'pie',
        name: 'Browser share',
        innerSize: '50%',
        data: [
          ['Payroll Tax', payrollTax],
          ['Net Salary', netsalary],
        ]
      }]
    });
  }

}
