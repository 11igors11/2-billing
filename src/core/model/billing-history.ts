import { Billing } from 'src/core/model/billing';

export class BillingHistory {

  get totalPrice(): number {
    let result = 0;
    for (let i = 0; i < this.months.length; i++) {
      if (this.months[i]) {
        result += new Date(new Date().getFullYear(), i + 1, 0).getDate() * this.billing.cost;
      }
    }
    return result;
  }

  constructor(public billing: Billing, public months = Array(12).fill(false)) {
  }
}
