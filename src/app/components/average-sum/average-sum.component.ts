import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/fetch.service';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-average-sum',
  templateUrl: './average-sum.component.html',
  styleUrls: ['./average-sum.component.scss']
})
export class AverageSumComponent implements OnInit {
  averageSum : number[] = [];
  
  chart = new Chart({
    chart: {
      type: 'line',
      height: 325
    },
    title: {
      text: 'Середня сума виданих кредитів по місяцях'
    },
    xAxis: {
      categories: [
        'Січ',
        'Лют',
        'Бер',
        'Квіт',
        'Трав',
        'Черв',
        'Лип',
        'Серп',
        'Вер',
        'Жовт',
        'Лист',
        'Груд',
      ]
    },
    yAxis: {
      title: {
        text: 'Середня сума виданих кредитів'
      }
    },
    series: [
      {
        name: 'Кредити',
        type:'line',
        color: '#f52d2d',
        data: [3080, 2505.050505050505, 2795.918367346939, 2729.92700729927, 2741.176470588235, 2692.901234567901, 2783.0882352941176, 2816.205533596838, 2812.320916905444, 2668.041237113402, 2749.656121045392, 2750]
      }  
    ],
    credits: {
      enabled: false
    }
  })


  constructor(private dataService : DataService) { }

  ngOnInit(): void {
    this.dataService.getAverageCreditAmounts().
    subscribe((resp)=>{
      this.averageSum = resp
      console.log(this.averageSum)
    })
    
  }
}
