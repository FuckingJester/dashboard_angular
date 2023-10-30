import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ChartModule} from 'angular-highcharts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CommonTableComponent } from './components/common-table/common-table.component';
import { ShortInformationComponent } from './components/short-information/short-information.component';
import { CreditCountsComponent } from './components/credit-counts/credit-counts.component';
import { AverageSumComponent } from './components/average-sum/average-sum.component';
import { TotalSumComponent } from './components/total-sum/total-sum.component';
import { TotalPercentComponent } from './components/total-percent/total-percent.component';
import { ReturnCountsComponent } from './components/return-counts/return-counts.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CommonTableComponent,
    ShortInformationComponent,
    CreditCountsComponent,
    AverageSumComponent,
    TotalSumComponent,
    TotalPercentComponent,
    ReturnCountsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ChartModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
