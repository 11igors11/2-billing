import { Component, Input } from '@angular/core';
import { BillingHistory } from 'src/core/model/billing-history';
import { BillingService } from 'src/core/service/billing.service';

@Component({
  selector: 'c-billing-list',
  templateUrl: './billing-list.component.html'
})
export class BillingListComponent {

  @Input() list: BillingHistory[];

  constructor(private billingService: BillingService) {
  }

  public checkMonth(monthNumber: number, value: boolean, history: BillingHistory): void {
    this.billingService.checkMonth(monthNumber, value, history);
  }

  public remove(item: BillingHistory): void {
    this.billingService.remove(item);
  }
}
