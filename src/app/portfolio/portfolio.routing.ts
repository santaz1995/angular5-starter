import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from 'app/portfolio/portfolio.component';

const routes: Routes = [
  {
    path: '',
    component: PortfolioComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioRouting {}
