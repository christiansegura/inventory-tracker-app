import {Component, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'stock-branch',
  styleUrls: ['stock-branch.component.scss'],
  template:`
    <div class="uk-margin" [formGroup]="parent">
      <label class="uk-form-label" for="form-stacked-text">Branch id</label>
      <div class="uk-form-controls">
        <input formControlName="branch" class="uk-input" id="form-stacked-text" type="text" placeholder="Branch id">
      </div>
    </div>
  `
})

export class StockBranchComponent {
  @Input() parent: FormGroup = new FormGroup({});
}
