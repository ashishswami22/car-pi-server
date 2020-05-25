import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-speedometer',
  templateUrl: './speedometer.component.html',
  styleUrls: ['./speedometer.component.scss']
})
export class SpeedometerComponent implements OnInit {

  @Input() speed: number = 0;
  @Input() rpm: number = 0;
  @Input() throttlePercent: number = 0;

  constructor() { }

  ngOnInit() {
  }

}
