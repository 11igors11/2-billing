import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Billing } from 'src/core/model/billing';

@Component({
  selector: 'c-billing-new',
  templateUrl: './billing-new.component.html',
})
export class BillingNewComponent implements OnInit {

  public form: FormGroup;

  @Output()
  public added = new EventEmitter<Billing>();

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      cost: ['', Validators.pattern(/^[0-9]*$/)]
    });
  }

  public submit(): void {
    if (this.form.invalid) {
      return;
    }
    const billing = new Billing(this.form.value.name, this.form.value.cost);
    this.added.emit(billing);
    this.form.reset();
  }
}
