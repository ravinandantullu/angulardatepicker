import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DatepickerComponent } from './datepicker/datepicker.component';

// Services.
import { EnableTimeIntervalService } from './services/enable-time-interval.service';

// Angular Material 2
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCheckboxModule } from '@angular/material';
import { MdDatepickerModule, MdNativeDateModule, MaterialModule } from '@angular/material';
import 'hammerjs';
import { HomeComponentComponent } from './home-component/home-component.component';

@NgModule({
  declarations: [
    AppComponent,
    DatepickerComponent,
    HomeComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MdButtonModule,
    MdCheckboxModule,
    MdNativeDateModule,
    MaterialModule,
    MdDatepickerModule,
  ],
  providers: [
    EnableTimeIntervalService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
