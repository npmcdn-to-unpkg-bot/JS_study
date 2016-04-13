import { Component }            from 'angular2/core';
import { Router }               from 'angular2/router';

import { PaymentInterface }     from '../../interfaces/payment.interface';
import { PaymentService }       from '../../services/payment.service';
import { Payment }              from "./payment";

@Component({
    selector: 'payments-list',
    templateUrl: 'app/components/payment/payments-list.html',
    providers: [PaymentService],
    directives: [Payment]
})

export class PaymentsList {
    payments: PaymentInterface[];

    constructor(
        private _router: Router,
        private _paymentService: PaymentService
    ) { }
    
    getPayments() {
        this._paymentService.getPayments().then(payments => this.payments = payments);
    }

    ngOnInit() {
        this.getPayments();
    }
}
