import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
    selector: 'app-form-error-message',
    templateUrl: './form-error-message-component.html'
})

export class FormErrorMessageComponent {
    @Input() public field: AbstractControl;
}
