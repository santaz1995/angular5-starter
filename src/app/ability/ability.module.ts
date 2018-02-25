import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbilityComponent } from 'app/ability/ability.component';
import { AbilityRouting } from 'app/ability/ability.routing';

@NgModule({
  imports: [
    CommonModule,
    AbilityRouting,
  ],
  declarations: [
    AbilityComponent
  ],
  providers: [
  ]
})
export class AbilityModule { }
