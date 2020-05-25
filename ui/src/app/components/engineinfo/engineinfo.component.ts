import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-engineinfo',
  templateUrl: './engineinfo.component.html',
  styleUrls: ['./engineinfo.component.scss']
})
export class EngineinfoComponent implements OnInit {

  @Input() fuelType: string;
  @Input() fuelPercent: number = 0;
  @Input() runtimeSeconds: number = 0;
  @Input() loadPercent: number = 0;
  @Input() oilTemperature: number = 0;
  @Input() coolantTemperature: number = 0;

  constructor() { }

  ngOnInit() {
  }

}
