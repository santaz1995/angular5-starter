import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { FormErrorMessageComponent } from 'app/common/components/form-error-message/form-error-message.component';

@NgModule({
    imports: [
      CommonModule,
      MatInputModule,
      MatFormFieldModule,
    ],
    declarations: [
      FormErrorMessageComponent,
    ],
    exports: [
      FormErrorMessageComponent,
      CommonModule,
    ]
})
export class FormErrorMessageModule { }
