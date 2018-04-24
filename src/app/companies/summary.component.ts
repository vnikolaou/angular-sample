import { Component, Input, OnChanges } from '@angular/core';
import { Company } from '../company';

@Component({
  selector: 'summary',
  template: `
		  <div>
		    <div>Id: {{company.id}}</div>
		    <div>Company: {{company.company}}</div>
		    <div>Contact: {{company.contact}}</div>
		    <div>Country: {{company.country}}</div>
		  </div>
	`
})
export class SummaryComponent {
 
  @Input()
  private company: Company;


}
