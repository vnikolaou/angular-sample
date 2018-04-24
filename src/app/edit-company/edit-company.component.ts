import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Company } from '../company';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-edit-company',
  templateUrl: './edit-company.component.html',
  styleUrls: ['./edit-company.component.css']
})
export class EditCompanyComponent implements OnInit { 
  company: Company;
  color = 'green';

  constructor(private companyService: CompanyService, 
	private router: Router, private route: ActivatedRoute) { 
  }

  ngOnInit() {
     this.company = <Company>{};
     this.getCompany();
  }

  cancel(): void {
     this.router.navigate(['/companies']);
  }

  getCompany(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.companyService.getCompany(id)
      .subscribe(company => this.company = company);
  } 

  updateCompany(): void { 
     this.companyService.updateCompany(this.company)
     	.subscribe(result => { console.log("company was updated: " + result)});
	 this.router.navigate(['/companies']); 
  }
}
