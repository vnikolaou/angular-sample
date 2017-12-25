import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';


import { AppComponent }         from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CompaniesComponent } from './companies/companies.component';
import { CompanyService } from './company.service';
import { AddCompanyComponent } from './add-company/add-company.component';
import { EditCompanyComponent } from './edit-company/edit-company.component';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { InMemoryDataService }  from './in-memory-data.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    CompaniesComponent,
    AddCompanyComponent,
    EditCompanyComponent,
    MessagesComponent
  ],
  providers: [ CompanyService, MessageService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
