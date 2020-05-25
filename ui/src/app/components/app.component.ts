import { Component, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ui';
  data = {
    id: 1,
    speed_kmph: 0,
    rpm: 0,
    run_time_seconds: 0,
    fuel_type: 'PETROL',
    fuel_level_percent: 0,
    engine_load_percent: 0,
    throttle_percent: 0,
    ambiant_air_temp_celcius: 0,
    engine_oil_temp_celcius: 0,
    intake_air_temp_celcius: 0,
    coolant_temp_celcius: 0,
    timestamp: 0,
    trip_id: 0
  };

  constructor(private http: HttpClient) {
    http.get('http://localhost:8000/obd/latest').subscribe((response: any) => {
      this.data = response;
    });
  }
}
