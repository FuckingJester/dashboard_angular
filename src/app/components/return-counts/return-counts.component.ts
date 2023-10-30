import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/fetch.service';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-return-counts',
  templateUrl: './return-counts.component.html',
  styleUrls: ['./return-counts.component.scss']
})
export class ReturnCountsComponent implements OnInit{
  

  returnSum : number[] = [];
  
  chart = new Chart({
    chart: {
      type: 'line',
      height: 325
    },
    title: {
      text: 'Загальна к-сть повернутих кредитів по місяцях'
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
        text: 'К-сть повернутих кредитів '
      }
    },
    series: [
      {
        name: 'Кредити',
        type:'line',
        color: '#044342',
        data: [1, 7, 19, 53, 118, 235, 116, 157, 254, 450, 1075, 195]
      }  
    ],
    credits: {
      enabled: false
    }
  })


  constructor(private dataService : DataService) { }

  ngOnInit(): void {
    this.dataService.getTotalReturnedCredits().
    subscribe((resp)=>{
      this.returnSum = resp
      console.log(this.returnSum)
    })
    
  }
}
