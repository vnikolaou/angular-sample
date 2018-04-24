import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompaniesComponent } from './companies.component';

describe('CompaniesComponent', () => {
  let component: CompaniesComponent;
  let fixture: ComponentFixture<CompaniesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompaniesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
      let parent = element.all(by.tagName('app-companies')).get(0);
      let companies = parent.all(by.tagName('summary'));

      expect(companies.length).toEqual(2);
  });
});
