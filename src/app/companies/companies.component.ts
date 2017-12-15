import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyService } from '../company.service';
import { Company } from '../company';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {
  @Output() title: EventEmitter<string> = new EventEmitter<string>();
  
  companies: Company[];

  constructor(private companyService: CompanyService, private router: Router) { }

  ngOnInit() {
	 this.getCompanies();
	 this.title.emit('List of Companies');
  }
  
  getCompanies(): void {
     this.companyService.getCompanies()
        .subscribe(companies => this.companies = companies);
  }  
  
  addCompany(): void {
	 this.router.navigate(['/add-company']);
  }
}
