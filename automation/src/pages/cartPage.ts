import type { Page } from '@playwright/test';
import { AddItemForm, CartList, DiscountForm, OrderSummary } from '@src/components/index.js';

export class CartPage {
  readonly addItemForm: AddItemForm;
  readonly cartList: CartList;
  readonly discountForm: DiscountForm;
  readonly orderSummary: OrderSummary;

  constructor(private page: Page) {
    this.addItemForm = new AddItemForm(this.page);
    this.cartList = new CartList(this.page);
    this.discountForm = new DiscountForm(this.page);
    this.orderSummary = new OrderSummary(this.page);
  }
}
