import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ApiFeedback } from 'app/common/entities/api-feedback';

@Injectable()
export class ApiFeedbackService {

  private feedbackUrl = '/feedbacks';

  constructor(private http: HttpClient,
              @Inject('backendUrl') protected backendUrl: string) {
  }

  /**
   * Send message
   * @returns {Observable<void>}
   */
  public sendEmail(contact: ApiFeedback): Observable<void> {
    return this.http.post<void>(`${this.backendUrl}${this.feedbackUrl}`, contact);
  }
}
