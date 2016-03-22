
import { Injectable } from 'angular2/core';

import {Payment} from "./payment.interface";
import {CategoryType} from "../../const/category-type";

@Injectable()

export class PaymentService {
    payments: Payment[];
    paymentType: CategoryType;

    setPaymentType( type: CategoryType ) {
        this.paymentType = type;
    }

    getPaymentType() {
        return this.paymentType;
    }

    addPayment( payment: Payment) {
        this.payments.push(payment);
    }

    getPayments() {
        return Promise.resolve(this.payments);
    }



}