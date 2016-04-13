import { Component }            from 'angular2/core';
import { RouteParams }          from 'angular2/router';

import { AccountInterface }     from '../../interfaces/account.interface';
import { AccountService }       from '../../services/account.service';
import { Account }              from "./account";


@Component({
    selector: 'account-edit',
    templateUrl: 'app/components/account/account-edit.html',
    providers: [AccountService],
    directives: [Account]
})

export class AccountEdit {
    accountID: any;
    account: AccountInterface;
    message: string;

    constructor(
        private routeParams: RouteParams,
        private _accountService: AccountService
    ) {
        this.accountID = this.routeParams.get('accountID');
        this.message = this.accountID ? 'edit' : 'create';
    }
}
