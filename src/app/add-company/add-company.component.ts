import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from '../company';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {
  company: Company;

  constructor(private companyService: CompanyService, private router: Router) { 
  	this.company = new Company();
  }

  ngOnInit() {
  }

  cancel(): void {
	 this.router.navigate(['/companies']);
  }

  insertCompany(): void { 
     this.companyService.insertCompany(this.company)
     	.subscribe(result => { this.router.navigate(['/companies']); });
  }
}
