import { Component }            from 'angular2/core';

import { PaymentInterface }     from '../../interfaces/payment.interface';

@Component({
    selector: 'payment',
    templateUrl: 'app/components/payment/payment.html',
    styleUrls: [],
    directives: [],
    inputs: ['data']
})

export class Payment {
    data: PaymentInterface;
    
    constructor() {}

}