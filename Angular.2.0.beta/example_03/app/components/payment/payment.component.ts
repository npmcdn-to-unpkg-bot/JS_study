import {Component} from 'angular2/core';

import {Payment} from "./payment.interface";

@Component({
    selector: 'payment-info',
    templateUrl: 'app/components/payment/payment.component.html'
})

export class PaymentComponent {
    payment: Payment;

}