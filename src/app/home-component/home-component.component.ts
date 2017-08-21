import { Component, OnInit } from '@angular/core';
import { EnableTimeIntervalService } from '../services/enable-time-interval.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {

  constructor(private enableTimeIntervalService: EnableTimeIntervalService) { }

  ngOnInit() {
  }

  public fromDateChange = (newDate) => {
    console.log(newDate);
    this.enableTimeIntervalService.fromDate = newDate;
  }

  public toDateChange = (newDate) => {
    console.log(newDate);
    this.enableTimeIntervalService.toDate = newDate;
  }

}
