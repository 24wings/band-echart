import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sample size (AUC Radio)';
  subTitle: string = 'T/R%'
  color: string = 'red';
  areaColor1: string = 'gray';

  title2 = 'Sample size (AUC Radio)2';
  subTitle2: string = 'T/R%2'
  color2: string = 'blue';
  areaColor2: string = 'green'
}
