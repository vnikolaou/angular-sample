import { Injectable } from '@angular/core';
import { Company } from './company';
import { COMPANIES } from './mock-companies';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';

@Injectable()
export class CompanyService {

  constructor(private messageService: MessageService) { }
	
	getCompanies(): Observable<Company[]> {
	  return of(COMPANIES);
	}	

	insertCompany(company: Company): Observable<boolean> {
	  let id: number = COMPANIES[COMPANIES.length-1].id + 1;
	  company.id = id;
	  COMPANIES.push(company);

	  this.messageService.showMessage('The company ' + company.company + ' was added successfully');
	  return of(true);
	}

	getCompany(id: number): Observable<Company> {
	  for (let c of COMPANIES) {
   	    if(c.id == id) {
 		return of(c);
	    }
	  }
	  return of(null);
	}

	deleteCompany(id: number): Observable<boolean> {
	  for(let i=0; i<COMPANIES.length; i++) {
   	    if(COMPANIES[i].id == id) {
                let name = COMPANIES[i].company;
                COMPANIES.splice(i, 1);
		this.messageService.showMessage('The company ' + name + ' was deleted successfully');
 		return of(true);
	    }
	  }	
	  return of(false);
	}

	updateCompany(company: Company): Observable<boolean> {
	  for (let c of COMPANIES) {
   	    if(c.id == company.id) {
 		c.company = company.company;
		c.country = company.country;
		c.contact = company.contact;

		this.messageService.showMessage('The company ' + c.company + ' was updated successfully');
	    }
	  }
	  return of(true);
	}		
}
