import { Component } from '@angular/core';
import { Home2Service } from './home2.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  input: string;
  input2: string;


  constructor(private service: Home2Service) {
  }

  teste(){
    this.service.list(this.input);
  }

  
}
