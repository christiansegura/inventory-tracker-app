import {Component, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'stock-selector',
  styleUrls: ['stock-selector.component.scss'],
  template:`
    <div class="uk-margin" [formGroup]="parent">
      <label class="uk-form-label" for="form-stacked-select">Select</label>
      <div class="uk-form-controls">
        <select class="uk-select" id="form-stacked-select">
          <option>Option 01</option>
          <option>Option 02</option>
        </select>
      </div>
    </div>
  `
})

export class StockSelectorComponent {
  @Input() parent: FormGroup = new FormGroup({});
}
