import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SpeedometerComponent } from './components/speedometer/speedometer.component';
import { HttpClientModule } from '@angular/common/http';
import { EngineinfoComponent } from './components/engineinfo/engineinfo.component';
import { AmbianceComponent } from './components/ambiance/ambiance.component';

@NgModule({
  declarations: [
    AppComponent,
    SpeedometerComponent,
    EngineinfoComponent,
    AmbianceComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
