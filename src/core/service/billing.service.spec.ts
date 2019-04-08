import { BillingService } from 'src/core/service/billing.service';
import { Billing } from 'src/core/model/billing';
import { BillingHistory } from 'src/core/model/billing-history';

describe('BillingService', () => {

  let service: BillingService;
  const testHistories = [];

  beforeEach(() => {
    service = new BillingService();
    testHistories.push(new BillingHistory(new Billing('10', 10)));
    testHistories.push(new BillingHistory(new Billing('20', 20)));
    testHistories.push(new BillingHistory(new Billing('30', 30)));
    (<any>service)._billingHistories = testHistories;
  });

  it('should check billing history getter', () => {
    expect(service.billingHistories).toEqual(testHistories);
  });

  it('should check billing history getter', () => {
    const histories = [...testHistories, ...testHistories];
    service.billingHistories = histories;
    expect((<any>service)._billingHistories).toEqual(histories);
  });

  it('should check billing adding billing', () => {
    const billing = new Billing('800', 800);
    service.addBilling(billing);
    const histories = (<any>service)._billingHistories;
    expect(histories[histories.length - 1].billing).toEqual(billing);
  });

  it('should check add month', () => {
    service.checkMonth(2, true, testHistories[0]);
    const histories = (<any>service)._billingHistories;
    expect(histories[0].months[2]).toEqual(true);
  });

  it('should check removing history', () => {
    service.remove(testHistories[0]);
    const histories = (<any>service)._billingHistories;
    expect(histories[0]).toEqual(testHistories[1]);
  });
});
