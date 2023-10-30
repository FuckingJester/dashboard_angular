import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/fetch.service';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-total-percent',
  templateUrl: './total-percent.component.html',
  styleUrls: ['./total-percent.component.scss']
})
export class TotalPercentComponent implements OnInit{
  percentSum : number[] = [];
  
  chart = new Chart({
    chart: {
      type: 'line',
      height: 325
    },
    title: {
      text: 'Загальна сума нарахованих відсотків по місяцях'
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
        text: 'Сума відсотків'
      }
    },
    series: [
      {
        name: 'Кредити',
        type:'line',
        color: '#7e0505',
        data: [450015, 736440, 1358865, 1641885, 1973347.5, 2090625, 1558245, 1628737.5, 2150820, 2140627.5, 3228922.5, 843697.5]
      }  
    ],
    credits: {
      enabled: false
    }
  })


  constructor(private dataService : DataService) { }

  ngOnInit(): void {
    this.dataService.getPercentAmounts().
    subscribe((resp)=>{
      this.percentSum = resp
      console.log(this.percentSum)
    })
    
  }
}
