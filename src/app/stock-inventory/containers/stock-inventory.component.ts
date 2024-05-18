import {Component} from '@angular/core';
import {FormControl, FormGroup, FormArray} from '@angular/forms';

@Component({
  selector: 'stock-inventory',
  styleUrls: ['stock-inventory.component.scss'],
  template: `
    <h1 class="uk-margin-top">Computer Inventory</h1>
    <form class="uk-form-stacked" [formGroup]="form" (ngSubmit)="onSubmit()">

      <div formGroupName="store">
        <div class="uk-margin">
          <label class="uk-form-label" for="form-stacked-text">Branch id</label>
          <div class="uk-form-controls">
            <input formControlName="branch" class="uk-input" id="form-stacked-text" type="text" placeholder="Branch id">
          </div>
        </div>
<!--        TODO: This is a new todo-->
        <div class="uk-margin">
          <label class="uk-form-label" for="form-stacked-text">Manager Code</label>
          <div class="uk-form-controls">
            <input formControlName="code" class="uk-input" id="form-stacked-text" type="text"
                   placeholder="Manager Code">
          </div>
        </div>
      </div>

      <div class="uk-margin">
        <label class="uk-form-label" for="form-stacked-select">Select</label>
        <div class="uk-form-controls">
          <select class="uk-select" id="form-stacked-select">
            <option>Option 01</option>
            <option>Option 02</option>
          </select>
        </div>
      </div>

      <div class="uk-margin">
        <div class="uk-form-label">Radio</div>
        <div class="uk-form-controls">
          <label><input class="uk-radio" type="radio" name="radio1"> Option 01</label><br>
          <label><input class="uk-radio" type="radio" name="radio1"> Option 02</label>
        </div>
      </div>
      <button class="uk-button uk-button-primary" type="submit" [disabled]="form.invalid">Order stock</button>
      <pre>{{ form.value | json }}</pre>
    </form>
  `
})

export class StockInventoryComponent {
  form = new FormGroup({
    store: new FormGroup({
      branch: new FormControl('321'),
      code: new FormControl('fds')
    })
  })

  onSubmit() {
    console.log('Submit:', this.form.value)
  }
}
