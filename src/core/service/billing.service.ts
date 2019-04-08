import { Billing } from 'src/core/model/billing';
import { BehaviorSubject } from 'rxjs';
import { BillingHistory } from 'src/core/model/billing-history';

export class BillingService {

  private _billingHistories: BillingHistory[];
  get billingHistories(): BillingHistory[] {
    return this._billingHistories;
  }

  set billingHistories(value: BillingHistory[]) {
    this._billingHistories = value;
    this.billingHistoriesChange.next(value);
  }

  public billingHistoriesChange = new BehaviorSubject<BillingHistory[]>(this._billingHistories);

  public priceChange = new BehaviorSubject<number>(0);

  constructor() {
    this._billingHistories = [];
  }

  addBilling(billing: Billing): void {
    const billingHistory = new BillingHistory(billing);
    this.billingHistories = [...this._billingHistories, billingHistory];
    this.updateTotalPrice();
  }

  public checkMonth(monthNumber: number, value: boolean, checkedHistory: BillingHistory) {
    const newHistory: BillingHistory = new BillingHistory(checkedHistory.billing, [...checkedHistory.months]);
    newHistory.months[monthNumber] = value;
    this.billingHistories = this.billingHistories.map(history => {
      if (history === checkedHistory) {
        return newHistory;
      } else {
        return history;
      }
    });
    this.updateTotalPrice();
  };

  public remove(item: BillingHistory): void {
    this.billingHistories = this.billingHistories.filter(history => history !== item);
    this.updateTotalPrice();
  }

  private updateTotalPrice(): void {
    let totalPrice = 0;
    this.billingHistories.forEach(history => {
      totalPrice += history.totalPrice;
    });
    this.priceChange.next(totalPrice);
  }
}
