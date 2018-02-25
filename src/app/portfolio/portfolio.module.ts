import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from 'app/portfolio/portfolio.component';
import { PortfolioRouting } from 'app/portfolio/portfolio.routing';
import { PortfolioService } from 'app/common/services/portfolio.service';

@NgModule({
  imports: [
    CommonModule,
    PortfolioRouting,
  ],
  declarations: [
    PortfolioComponent
  ],
  providers: [
    PortfolioService
  ]
})
export class PortfolioModule { }
