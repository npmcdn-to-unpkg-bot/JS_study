import { Component }            from 'angular2/core';
import { RouteParams }          from 'angular2/router';

import { PaymentInterface }     from '../../interfaces/payment.interface';
import { PaymentService }       from '../../services/payment.service';
import { Payment }              from "./payment";


@Component({
    selector: 'payment-edit',
    templateUrl: 'app/components/payment/payment-edit.html',
    providers: [PaymentService],
    directives: [Payment]
})

export class PaymentEdit {
    paymentID: any;
    payment: PaymentInterface;
    message: string;

    constructor(
        private routeParams: RouteParams,
        private _paymentService: PaymentService
    ) {
        this.paymentID = this.routeParams.get('paymentID');
        this.message = this.paymentID ? 'edit' : 'create';
    }
}
