import { Component, OnInit } from '@angular/core';
import { PushNotificationsService } from 'ng-push';


@Component({
  // tslint:disable-next-line
  selector: 'body',
  templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit {

  constructor(private pushNotifications: PushNotificationsService) {
  }

  public ngOnInit() {
    this.pushNotifications.create(
      'Example One', {body: 'Just an example'}).subscribe(res => {
        if (res.event.type === 'click') {
          // You can do anything else here
          res.notification.close();
        }
    });
  }
}
