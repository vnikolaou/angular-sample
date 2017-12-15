import { Injectable } from '@angular/core';
import { Company } from './company';
import { COMPANIES } from './mock-companies';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class CompanyService {

  constructor() { }
	
	getCompanies(): Observable<Company[]> {
	  return of(COMPANIES);
	}	
}
