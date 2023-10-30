import { HttpClient } from '@angular/common/http';
import { Observable, map, tap } from 'rxjs';
import { IUser } from '../models/user.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'https://raw.githubusercontent.com/LightOfTheSun/front-end-coding-task-db/master/db.json';
 
  constructor(private http: HttpClient) { }

  getData(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.apiUrl)
  }

  filterCountsByDate() {
    return this.http.get<IUser[]>(this.apiUrl).pipe(
      map((response: any[]) => {
        const creditCountsByMonth: number[] = new Array(12).fill(0);
        response.forEach(entry => {
          const issuanceDate = new Date(entry.issuance_date);
          const month = issuanceDate.getMonth();
          creditCountsByMonth[month]++;
        });
        return creditCountsByMonth;
      })
    );
  }

  getAverageCreditAmounts() {
    return this.http.get<IUser[]>(this.apiUrl).pipe(
      map((response: any[]) => {
        const monthlyAverages: number[] = new Array(12).fill(0);
        const monthlySums: { month: number, sum: number, count: number }[] = new Array(12).fill(0).map((_, i) => ({ month: i + 1, sum: 0, count: 0 }));
        response.forEach(entry => {
          const issuanceDate = new Date(entry.issuance_date);
          const month = issuanceDate.getMonth();
          monthlySums[month].sum += entry.body;
          monthlySums[month].count++;
        });
        monthlySums.forEach((item, index) => {
          monthlyAverages[index] = item.sum / item.count || 0;
        });
        return monthlyAverages;
      })
    );
  }

  getSumCreditAmounts(){
    return this.http.get<IUser[]>(this.apiUrl).pipe(
      map((response: any[]) => {
        const monthlyTotals: number[] = new Array(12).fill(0);
        response.forEach(entry => {
          const issuanceDate = new Date(entry.issuance_date);
          const month = issuanceDate.getMonth();
          monthlyTotals[month] += entry.body;
        });
        return monthlyTotals;
      })
    );
  }

  getPercentAmounts(){
    return this.http.get<IUser[]>(this.apiUrl).pipe(
      map((response: any[]) => {
        const monthlyPercent: number[] = new Array(12).fill(0);
        response.forEach(entry => {
          const issuanceDate = new Date(entry.issuance_date);
          const month = issuanceDate.getMonth();
          monthlyPercent[month] += entry.percent;
        });
        return monthlyPercent;
      })
    );
  }

  getTotalReturnedCredits() {
    return this.http.get<IUser[]>(this.apiUrl).pipe(
      map((response: any[]) => {
        const monthlyReturnedCredits: number[] = new Array(12).fill(0);
        response.forEach(entry => {
          if (entry.actual_return_date) {
            const returnDate = new Date(entry.actual_return_date);
            const month = returnDate.getMonth();
            monthlyReturnedCredits[month]++;
          }
        });
        return monthlyReturnedCredits;
      })
    );
  }
}