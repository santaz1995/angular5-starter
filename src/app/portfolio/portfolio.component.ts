import { Component } from '@angular/core';
import { ngIfAnimation } from 'app/common/animations/ngIf.animation';

@Component({
  templateUrl: 'portfolio.component.html',
  animations: [ngIfAnimation]
})
export class PortfolioComponent {

  public portfolioType = 'all';

  /**
   * Filters for portfolio type
   * @param {string} portfolioType
   */
  public filterPortfolioType(portfolioType: string = 'all') {
    this.portfolioType = null;
    setTimeout(() => {
      this.portfolioType = portfolioType;
    }, 270);
  }
}
