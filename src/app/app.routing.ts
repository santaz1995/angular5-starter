import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from 'app/common/layouts/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './index/index.module#IndexModule',
      },
      {
        path: 'contact',
        loadChildren: './contact/contact.module#ContactModule',
      },
      {
        path: 'ability',
        loadChildren: './ability/ability.module#AbilityModule',
      },
    ]
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
