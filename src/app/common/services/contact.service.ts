import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AppConfig } from 'app/common/services/app-config.service';

@Injectable()
export class ContactService {

  constructor(private http: HttpClient,
              private appConfig: AppConfig) {
  }

  /**
   * Send message
   * @returns {Observable<Contact>}
   */
  public sendEmail(contact: Contact): Observable<string> {
    return this.http.post<string>(`${this.appConfig.getBackendURL()}/feedback`, contact)
      .map( (res) => {
        return res;
      });
  }
}
