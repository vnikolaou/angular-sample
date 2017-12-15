import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent }         from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CompaniesComponent } from './companies/companies.component';
import { CompanyService } from './company.service';
import { AddCompanyComponent } from './add-company/add-company.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    CompaniesComponent,
    AddCompanyComponent
  ],
  providers: [ CompanyService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
