
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/fetch.service';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-total-sum',
  templateUrl: './total-sum.component.html',
  styleUrls: ['./total-sum.component.scss']
})
export class TotalSumComponent implements OnInit {
  totalSum : number[] = [];
  
  chart = new Chart({
    chart: {
      type: 'pie',
      height: 325
    },
    title: {
      text: 'Загальна cума виданих кредитів по місяцях'
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
        text: 'Сума виданих кредитів'
      }
    },
    series: [
      {
        name: 'Кредити',
        type:'line',
        color: '#000000',
        data: [
          {
            name: 'Січ',
            y: 154000,
            color: '#044342',
          },
          {
            name: 'Лют',
            y: 248000,
            color: '#7e0505',
          },
          {
            name: 'Бер',
            y: 548000,
            color: '#ed9e20',
          },
          {
            name: 'Квіт',
            y: 748000,
            color: '#6920fb',
          },
          {
            name: 'Трав',
            y: 1165000,
            color: '#121212',
          },
          {
            name: 'Черв',
            y: 1745000,
            color: '#044342',
          },
          {
            name: 'Лип',
            y: 757000,
            color: '#7e0505',
          },
          {
            name: 'Серп',
            y: 712500,
            color: '#ed9e20',
          },
          {
            name: 'Вер',
            y: 981500,
            color: '#6920fb',
          },
          {
            name: 'Жовт',
            y: 1294000,
            color: '#121212',
          },
          {
            name: 'Лист',
            y: 1999000,
            color: '#6920fb',
          },
          {
            name: 'Груд',
            y: 610500,
            color: '#121212',
          },
          ]
      }  
    ],
    credits: {
      enabled: false
    }
  })


  constructor(private dataService : DataService) { }

  ngOnInit(): void {
    this.dataService.getSumCreditAmounts().
    subscribe((resp)=>{
      this.totalSum = resp
      console.log(this.totalSum)
    })
    
  }
}
