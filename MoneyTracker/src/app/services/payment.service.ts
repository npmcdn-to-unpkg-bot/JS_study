import { Injectable }                   from 'angular2/core';

import { PaymentInterface }             from '../interfaces/payment.interface';
import { PAYMENTS }                     from '../mock/payment.mock';

@Injectable()
export class PaymentService {
    getPayments() {
        return new Promise<PaymentInterface[]> ( resolve =>
            setTimeout( () => resolve( PAYMENTS ), 1000)
        );
    }
    getPayment(ID: number) {
        return new Promise<PaymentInterface> ( resolve =>
            setTimeout( () =>
                    resolve( PAYMENTS.filter( (payment) => payment.ID == ID )[0] ),
                1000
            )
        );
    }
}
