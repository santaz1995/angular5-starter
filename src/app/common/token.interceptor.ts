import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { AuthenticationService } from 'app/common/services/authentication.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/Observable';
import { NotificationsService } from 'angular2-notifications';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  /**
   * Auth request add token to headers
   * @param request
   * @param {string} token
   * @returns {HttpRequest<any>}
   */
  private static authenticateRequest(request: any, token: string): HttpRequest<any> {
    return request.clone({
      setHeaders: {
        'Authorization': `Bearer ${token}`,
        'Accept': `application/json`,
        'Content-Type': `application/json`,
      }
    });
  }

  constructor(private injector: Injector,
              private router: Router,
              private notification: NotificationsService ) {
  }

  /**
   * Token intercept
   * @param {HttpRequest<any>} request
   * @param {HttpHandler} next
   * @returns {Observable<HttpEvent<any>>}
   */
  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const auth = this.injector.get(AuthenticationService);

    if (auth.isAuthenticated()) {
      request = TokenInterceptor.authenticateRequest(request, auth.getToken());
    }

    return next.handle(request).do(() => {
    }, (error: HttpErrorResponse) => {
      this.handelError(error);
    });
  }

  /**
   * @param {HttpErrorResponse} error
   * @returns {Promise<boolean>}
   */
  private handelError(error: HttpErrorResponse): void {

    switch (error.status) {
      case 500: {
        this.notification.error('Error', 'Server error');
        break;
      }
      case 401: {
        this.notification.error('Error', 'Server error');
        break;
      }
      case 404: {
        this.notification.error('Error', 'Server error');
        break;
      }
      default: {

        if (error.error.errorMessage) {
          this.notification.error('Error', error.error.errorMessage);
        } else {
          this.notification.error('Error', 'Server error');
        }

        break;
      }
    }
  }
}
