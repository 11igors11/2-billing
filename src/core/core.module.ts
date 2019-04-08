import { NgModule } from '@angular/core';
import { BillingReportComponent } from 'src/core/billing/billing-report.component';
import { BillingNewComponent } from 'src/core/billing/new/billing-new.component';
import { BillingListComponent } from 'src/core/billing/list/billing-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from 'src/shared/shared.module';
import { BillingService } from 'src/core/service/billing.service';

@NgModule({
  imports: [
    BrowserModule,
    SharedModule,
  ],
  declarations: [
    BillingReportComponent,
    BillingNewComponent,
    BillingListComponent,
  ],
  providers: [
    BillingService,
  ],
  exports: [
    BillingReportComponent,
  ]
})
export class CoreModule {

}
