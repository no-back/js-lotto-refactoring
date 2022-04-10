import {
  LOTTO_PRICE,
  MONETARY_UNIT,
  ALERT_MESSAGE,
} from '../utils/constants.js';
import { $, clearInputValue } from '../utils/DOM.js';
export default class PurchaseAmountInput {
  constructor({ createLottoTickets }) {
    this.$purchaseForm = $('.purchase-form');
    this.$purchaseInput = $('.purchase-form__input');
    this.$purchaseButton = $('.purchase-form__button');
    this.createLottoTickets = createLottoTickets;
    this.initEventListers();
    console.log(createLottoTickets);
  }

  initEventListers() {
    this.$purchaseForm.addEventListener('submit', (e) => {
      e.preventDefault();
      this.onSubmitPurchaseAmount();
    });
  }
  onSubmitPurchaseAmount() {
    const purchaseAmount = this.$purchaseInput.value;
    const errorMessage = this.validateAmount(purchaseAmount);

    if (errorMessage) {
      alert(errorMessage);
      clearInputValue(this.$purchaseInput);
      this.$purchaseInput.focus();

      return;
    }

    const change = purchaseAmount % LOTTO_PRICE;

    if (change > 0) {
      alert(ALERT_MESSAGE.PURCHASE_AMOUNT_HAS_CHANGE(change));
    }

    this.createLottoTickets((purchaseAmount - change) / LOTTO_PRICE);
  }

  validateAmount(purchaseAmount) {
    if (purchaseAmount % MONETARY_UNIT)
      return ALERT_MESSAGE.PURCHASE_AMOUNT_IS_INVALID_AMOUNT;

    if (purchaseAmount < LOTTO_PRICE)
      return ALERT_MESSAGE.PURCHASE_AMOUNT_IS_LOW;
  }

  reset() {
    clearInputValue(this.$purchaseInput);
  }
}
