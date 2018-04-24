import { Injectable } from '@angular/core';

//@Injectable()
export class TestService {
  constructor() { 
     console.log("Creating a TestService instance....");
  }
	
  public testme() {
     console.log("testme()....");
  }	
}    
