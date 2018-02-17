import { DataService } from './data.service';
import { GeolocationService } from './geolocation.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule,MatIconModule,MatInputModule,MatSelectModule,MatSliderModule,MatToolbarModule,
        MatCardModule,MatSlideToggleModule} from '@angular/material';
import 'hammerjs';
import { ListComponent } from './list/list.component'

@NgModule({
  declarations: [
    AppComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,MatIconModule,MatInputModule,MatSelectModule,MatSliderModule,MatToolbarModule,
      MatCardModule,MatSlideToggleModule
  ],
  providers: [GeolocationService,DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
