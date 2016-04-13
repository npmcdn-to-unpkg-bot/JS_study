import { Component }            from 'angular2/core';
import { Router }               from 'angular2/router';

import { AccountInterface }     from '../../interfaces/account.interface';
import { AccountService }       from '../../services/account.service';
import { Account }              from "./account";

@Component({
    selector: 'accounts-list',
    templateUrl: 'app/components/account/accounts-list.html',
    providers: [AccountService],
    directives: [Account]
})

export class AccountsList {
    accounts: AccountInterface[];

    constructor(
        private _router: Router,
        private _accountService: AccountService
    ) { }
    
    getAccounts() {
        this._accountService.getAccounts().then(accounts => this.accounts = accounts);
    }

    ngOnInit() {
        this.getAccounts();
    }
}
