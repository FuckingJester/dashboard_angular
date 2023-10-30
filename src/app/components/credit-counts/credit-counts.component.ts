import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/fetch.service';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-credit-counts',
  templateUrl: './credit-counts.component.html',
  styleUrls: ['./credit-counts.component.scss']
})
export class CreditCountsComponent implements OnInit {
  creditCounts : number[] = [];
  
  chart = new Chart({
    chart: {
      type: 'line',
      height: 325
    },
    title: {
      text: 'Загальна кількість виданих кредитів по місяцях'
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
        text: 'К-сть виданих кредитів'
      }
    },
    series: [
      {
        name: 'Кредити',
        type:'line',
        color: '#f5b52d',
        data: [50, 99, 196, 274, 425, 648, 272, 253, 349, 485, 727, 222]
      }  
    ],
    credits: {
      enabled: false
    }
  })


  constructor(private dataService : DataService) { }

  ngOnInit(): void {
    this.dataService.filterCountsByDate().
    subscribe((resp)=>{
      this.creditCounts = resp
      console.log(this.creditCounts)
    })
    
  }
}
