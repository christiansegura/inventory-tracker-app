import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Product} from '../../models/product.interface';

@Component({
  selector: 'stock-selector',
  styleUrls: ['stock-selector.component.scss'],
  template:`
    <div class="uk-margin" [formGroup]="parent">
      <div formGroupName="selector">
      <label class="uk-form-label" for="form-stacked-select">Products</label>
      <div class="uk-form-controls">
        <select formControlName="product" class="uk-select" id="form-stacked-select">
          <option value="">Select Stock</option>
          <option *ngFor="let product of products" [value]="product.id">{{product.name}} - {{product.price}}</option>
        </select>
      </div>

        <label class="uk-form-label" for="form-stacked-select">Quantity</label>
        <div class="uk-form-controls">
          <input
            class="uk-input"
            type="number"
            step="10"
            min="10"
            max="1000"
            formControlName="quantity">
          <button class="uk-button-primary uk-padding-small uk-margin-top" type="button">
            Add Stock
          </button>
        </div>
      </div>
    </div>
  `
})

export class StockSelectorComponent implements OnInit{
  @Input() parent: FormGroup = new FormGroup({});
  @Input() products: Product[] = [];
  ngOnInit() {
    console.log(this.parent)
  }
}
