import { Billing } from 'src/core/model/billing';
import { BillingHistory } from 'src/core/model/billing-history';

describe('BillingHistory', () => {

  let billingHistory: BillingHistory;
  let billing;

  beforeEach(() => {
    billing = new Billing('10', 10);
    billingHistory = new BillingHistory(billing);
  });

  it('should check totalPrice getter', () => {
    // just for February and April
    billing.months = [
      false,
      true,
      false,
      true,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
    ];
    let result = 0;
    for (let i = 0; i < billingHistory.months.length; i++) {
      if (billingHistory.months[i]) {
        result += new Date(new Date().getFullYear(), i + 1, 0).getDate() * this.billing.cost;
      }
    }
    expect(billingHistory.totalPrice).toEqual(result);
  });

});
