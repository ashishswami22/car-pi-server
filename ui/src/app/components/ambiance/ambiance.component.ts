import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ambiance',
  templateUrl: './ambiance.component.html',
  styleUrls: ['./ambiance.component.scss']
})
export class AmbianceComponent implements OnInit {

  @Input() ambianceTemperature: number = 0;

  constructor() { }

  ngOnInit() {
  }

}
