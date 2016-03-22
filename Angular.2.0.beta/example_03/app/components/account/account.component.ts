import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import { Account } from "./account.interface";
import { AccountService } from "./account.service";
import { PaymentService } from "../payment/payment.service";
import { CategoryType } from "../../const/category-type";

@Component({
    selector: 'account-info',
    templateUrl: 'app/components/account/account.component.html'
})

export class AccountComponent implements OnInit {
    account: Account;

    constructor(
        private _accountService: AccountService,
        private _paymentService: PaymentService,
        private _router: Router
    ) { }

    getAccount() {
        this._accountService.getAccount()
            .then( account => this.account = account );
    }

    showPayments() {

    }

    addSpending() {
        this._paymentService.setPaymentType( CategoryType.SPENDING );
        this._router.navigate(['AddPayment']);
    }

    addIncome() {
        this._paymentService.setPaymentType( CategoryType.INCOME );
        this._router.navigate(['AddPayment']);
    }

    ngOnInit() {
        this.getAccount();
    }
}