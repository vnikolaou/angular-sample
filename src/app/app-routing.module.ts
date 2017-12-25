import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CompaniesComponent }      from './companies/companies.component';
import { AddCompanyComponent }      from './add-company/add-company.component';
import { EditCompanyComponent }      from './edit-company/edit-company.component';

const routes: Routes = [
  { path: '', redirectTo: '/companies', pathMatch: 'full' },
  { path: 'companies', component: CompaniesComponent },
  { path: 'edit-company/:id', component: EditCompanyComponent },
  { path: 'add-company', component: AddCompanyComponent }  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
