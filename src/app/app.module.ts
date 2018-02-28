import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'app/app.routing';
import { AppComponent } from 'app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutComponent } from './common/layouts/layout.component';
import { HttpClientModule } from '@angular/common/http';
import { AppConfig } from 'app/common/services/app-config.service';
import { PushNotificationsModule } from 'ng-push';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    PushNotificationsModule
  ],
  declarations: [
    LayoutComponent,
    AppComponent,
  ],
  providers: [
    AppConfig
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
