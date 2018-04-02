import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from 'app/portfolio/portfolio.component';
import { PortfolioRouting } from 'app/portfolio/portfolio.routing';

@NgModule({
  imports: [
    CommonModule,
    PortfolioRouting,
  ],
  declarations: [
    PortfolioComponent
  ],
  providers: [
  ]
})
export class PortfolioModule { }
