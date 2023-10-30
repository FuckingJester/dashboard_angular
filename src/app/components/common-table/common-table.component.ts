import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs';
import { IUser } from 'src/app/models/user.model';
import { DataService } from 'src/app/services/fetch.service';



@Component({
  selector: 'app-common-table',
  templateUrl: './common-table.component.html',
  styleUrls: ['./common-table.component.scss']
})
export class CommonTableComponent implements OnInit {
  data: IUser[] = [];
  filteredData : IUser[] = []

  isLoading: boolean = false;

  todayDate: Date = new Date;

  issuanceDateFilter? : Date;
  returnDateFilter?: Date;

  constructor(private dataService : DataService) { }

  ngOnInit(): void {
    this.isLoading = true
    this.dataService.getData().pipe(
      finalize(() => {
        this.isLoading = false;
      })
    ).
    subscribe((response) => {
      this.data = response;
      this.filteredData = response;
    });
  }
  reset() : void{
    this.filteredData = this.data
  }
  filterDataByIssuanceDate(): void {
    this.filteredData = this.data.filter(item => item.issuance_date === this.issuanceDateFilter );
    
  }

  filterDataByReturnDate(): void {
    this.filteredData = this.data.filter(item => item.actual_return_date === this.returnDateFilter);
  }


  filterDataForOverdueLoans(): void {
    this.filteredData = this.data.filter(item => {
      const actualReturnDate = new Date(item.actual_return_date).getTime()
      const returnDate = new Date(item.return_date).getTime()
      console.log(actualReturnDate)
      console.log(returnDate)
      return actualReturnDate > returnDate || (returnDate < this.todayDate.getTime() && !actualReturnDate)
    })
  }
}




  // filterDataForOverdueLoans(): void {
  //   this.dataService.getData().pipe(
  //     map((response:any[]) => response),
  //     filter((item) => item.actual_return_date >  item.return_date || (item.return_date < this.todayDate && !item.actual_return_date))
  //   ).subscribe(
  //     data => this.filteredData = data);
  // }