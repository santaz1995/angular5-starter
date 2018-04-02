import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { AppRoutingModule } from 'app/app.routing';
import { AppComponent } from 'app/app.component';
import { LayoutComponent } from './common/layouts/layout.component';
import { environment } from 'environments/environment';
import { TokenInterceptor } from 'app/common/token.interceptor';
import { LocalStorageService } from 'app/common/services/local-storage.service';
import { WindowRef } from 'app/common/services/window-ref.service';
import { AuthenticationService } from 'app/common/services/authentication.service';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    SimpleNotificationsModule.forRoot()
  ],
  declarations: [
    LayoutComponent,
    AppComponent,
  ],
  providers: [
    LocalStorageService,
    WindowRef,
    AuthenticationService,
    {
      provide: 'backendUrl',
      useValue: environment.backendUrl,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
