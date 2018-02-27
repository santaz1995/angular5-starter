import { Component, OnInit } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, Router, RouterEvent } from '@angular/router';

@Component({
  templateUrl: 'layout.component.html'
})
export class LayoutComponent implements OnInit {

  public isShowMenu: boolean;

  constructor(private router: Router) { }

  /**
   * Event for change routing
   */
  public ngOnInit() {
    this.router.events.subscribe((event: RouterEvent) => {
      this.navigationInterceptor(event);
    });
  }

  /**
   * Hide/Show menu
   */
  public toggleMenu() {
    this.isShowMenu = !this.isShowMenu;
  }

  /**
   * Navigation interceptor for show or hide loading indicator
   * @param event
   */
  private navigationInterceptor(event): void {
    if (event instanceof NavigationEnd) {
      this.toggleMenu();
    } else if (event instanceof NavigationCancel) {
      this.toggleMenu();
    } else if (event instanceof NavigationError) {
      this.toggleMenu();
    }
  }
}
