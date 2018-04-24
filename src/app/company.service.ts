import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Company } from './company';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class CompanyService {
  private companiesUrl = 'api/companies';  // URL to web api

  private httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient, private messageService: MessageService) { }
	
	getCompanies(): Observable<Company[]> {
           return this.http.get<Company[]>(this.companiesUrl).
	    	pipe(
 	      	 //   tap(companies => this.messageService.showMessage('Companies have been found')),
	      	    catchError(this.handleError('getCompanies', []))
	        );
	}	

	insertCompany(company: Company): Observable<any> {
	  return this.http.post<Company>(this.companiesUrl, company, this.httpOptions).
		pipe(
		    tap((company: Company) => this.messageService.showMessage('The company ' + company.company + ' was added successfully')),
		    catchError(this.handleError<Company>('insertCompany'))
	  	);
	}

	getCompany(id: number): Observable<Company> {
	  const url = `${this.companiesUrl}/${id}`;
	  return this.http.get<Company>(url).
	    	pipe(
		    tap(_ => this.messageService.showMessage(`Company id = ${id} was found`)),
		    catchError(this.handleError<Company>(`getCompany id=${id}`))
	    	);
	}

	deleteCompany(company: Company): Observable<any> {
	  const url = `${this.companiesUrl}/${company.id}`;

	  return this.http.delete<Company>(url, this.httpOptions).
		pipe(
		    tap(_ => this.messageService.showMessage('The company ' + company.company + ' was deleted successfully')),
		    catchError(this.handleError<Company>('deleteCompany'))
	  	);
	}

	updateCompany(company: Company): Observable<any> {
	  return this.http.put(this.companiesUrl, company, this.httpOptions).
	  	pipe(
		    tap(_ => this.messageService.showMessage('The company ' + company.company + ' was updated successfully')),
		    catchError(this.handleError<any>('updateCompany'))
		);
	}	

	private handleError<T> (operation = 'operation', result?: T) {
	  return (error: any): Observable<T> => {
	    // TODO: send the error to remote logging infrastructure
	    console.error(error); // log to console instead
	 
	    this.messageService.showMessage(`${operation} failed: ${error.message}`);
	 
	    // Let the app keep running by returning an empty result.
	    return of(result as T);
	  };
	}	
}
