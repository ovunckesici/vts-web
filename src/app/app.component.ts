import {Component, OnDestroy, OnInit} from '@angular/core';
import {GpsService} from "./services/gps.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title: string = 'vts-app'

  constructor(private gpsService: GpsService) {
  }

  ngOnInit(): void {
    this.gpsService.gps.subscribe(data => {
      console.log(data);
    });
  }

  ngOnDestroy(): void {
  }
}
