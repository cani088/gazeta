import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UserComponentComponent } from './user-component/user-component.component';
import { ResultsComponentComponent } from './results-component/results-component.component';
import { Form } from '@angular/forms';
import { DataService } from './services/data.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    UserComponentComponent,
    ResultsComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
 
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
