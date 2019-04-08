import { Component, OnDestroy, OnInit } from '@angular/core';
import { BillingService } from 'src/core/service/billing.service';
import { Billing } from 'src/core/model/billing';
import { Observable, Subject } from 'rxjs';
import { BillingHistory } from 'src/core/model/billing-history';

@Component({
  selector: 'c-billing-report',
  templateUrl: './billing-report.component.html'
})
export class BillingReportComponent implements OnInit, OnDestroy {

  billings: Subject<BillingHistory[]>;
  price: Subject<number>;

  constructor(private billingService: BillingService) {
  }

  ngOnInit(): void {
    this.billings = this.billingService.billingHistoriesChange;
    this.price = this.billingService.priceChange;
  }

  ngOnDestroy(): void {
  }

  public add(billing: Billing): void {
    this.billingService.addBilling(billing);
  }
}
