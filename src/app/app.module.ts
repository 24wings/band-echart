import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BandEchartComponent } from './com/demo-echart/band-echart.component';

@NgModule({
  declarations: [
    AppComponent,
    BandEchartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
