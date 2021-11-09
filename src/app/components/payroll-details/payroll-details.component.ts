import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts/'

@Component({
  selector: 'app-payroll-details',
  templateUrl: './payroll-details.component.html',
  styleUrls: ['./payroll-details.component.scss']
})
export class PayrollDetailsComponent implements OnInit {
  @Input() salary: number;
  constructor() { }

  ngOnInit(): void {
    this.createChart()
  }

  createChart(){
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
        text: 'Salary<br>Structure<br>2017',
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
          ['Payroll Tax', 58.00],
          ['Net Salary', 42.00],
        ]
      }]
    });
  }

}
