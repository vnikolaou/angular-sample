import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '';
  
  onGetTitle(title: string) :void {
    console.log("title=" + title);
    this.title = title;
  }
}
