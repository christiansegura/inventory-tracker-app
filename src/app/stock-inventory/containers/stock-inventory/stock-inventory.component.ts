import {Component} from '@angular/core';
import {FormControl, FormGroup, FormArray} from '@angular/forms';
import {Product} from '../../models/product.interface';

@Component({
  selector: 'stock-inventory',
  styleUrls: ['stock-inventory.component.scss'],
  template: `
    <h1 class="uk-margin-top">Computer Inventory</h1>
    <form class="uk-form-stacked" [formGroup]="form" (ngSubmit)="onSubmit()">

      <stock-branch
      [parent]="form.controls.store"
      ></stock-branch>

      <stock-selector
      [parent]="form.controls.selector"
      [products]="products"
      ></stock-selector>

      <stock-products
      [parent]="form"
      ></stock-products>

      <div formGroupName="store">

        <div class="uk-margin">
          <label class="uk-form-label" for="form-stacked-text">Manager Code</label>
          <div class="uk-form-controls">
            <input formControlName="code" class="uk-input" id="form-stacked-text" type="text"
                   placeholder="Manager Code">
          </div>
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

    </form>
  `
})

export class StockInventoryComponent {

  products: Product[] = [
    {id: 1, price: 2800, name: 'Macbook Pro'},
    {id: 2, price: 1800, name: 'Macbook'},
    {id: 3, price: 30, name: 'USB-C Adapter'},
    {id: 4, price: 2000, name: 'iPhone'},
    {id: 5, price: 1900, name: 'iPad'}
  ];

  form = new FormGroup({
    store: new FormGroup({
      branch: new FormControl(''),
      code: new FormControl('')
    }),
    selector: new FormGroup({
      product: new FormControl(''),
      product_id: new FormControl(''),
      quantity: new FormControl(10)
    }),
    stock: new FormArray([])
  })

  onSubmit() {
    console.log('Submit:', this.form.value)
  }
}
