import { Injectable } from '@angular/core';
 
@Injectable()
export class MessageService {
  message: string;
 
  showMessage(message: string) {
    this.message = message;
  }
 
  clear() {
    this.message = null;
  }
}
