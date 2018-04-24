import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyService } from '../company.service';
import { TestService } from '../test.service';
import { Company } from '../company';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css'],
  providers: [TestService]
})
export class CompaniesComponent implements OnInit {
  private companies: Company[];
  private fontSizePx: number;

  constructor(private companyService: CompanyService, private router: Router, private testService: TestService) { 
    
  }

  ngOnInit() {
        this.testService.testme();
        this.getCompanies();
	this.fontSizePx = 1;
  }

  getCompanies(): void {
     this.companyService.getCompanies()
        .subscribe(companies => this.companies = companies);
  }  

  addCompany(): void {
	 this.router.navigate(['/add-company']);
  }

  editCompany(id: number): void {
	 this.router.navigate(['/edit-company/' + id]);
  }

  deleteCompany(company: Company): void {
     this.companyService.deleteCompany(company)
     	.subscribe(result => this.getCompanies());
  }
}
