import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AppConfig } from 'app/common/services/app-config.service';

@Injectable()
export class PortfolioService {

  constructor(private http: HttpClient,
              private appConfig: AppConfig) {
  }

}
