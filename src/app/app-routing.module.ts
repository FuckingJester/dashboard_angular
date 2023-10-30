import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonTableComponent } from './components/common-table/common-table.component';
import { ShortInformationComponent } from './components/short-information/short-information.component';

const routes: Routes = [
  { path: '', redirectTo: 'general-table', pathMatch : 'full'},
  { path: 'general-table', component: CommonTableComponent },
  { path: 'short-information', component: ShortInformationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
