import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'nightwatch-sample';
  message = "";

 changeText(value : string){
this.message = value;
  }
}
