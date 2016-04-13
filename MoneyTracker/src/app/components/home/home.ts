import {Component}              from 'angular2/core';

import { AccountInterface }     from '../../interfaces/account.interface';
import { AccountService }       from '../../services/account.service';

@Component({
    selector: 'home',
    templateUrl: 'app/components/home/home.html',
    styleUrls: ['app/components/home/home.css'],
    providers: [AccountService],
    directives: []
})
export class Home {
    activeAccount: AccountInterface;

    constructor(
        private _accountService: AccountService
    ) {}

    getActiveAccount() {
        this._accountService.getActiveAccount().then(account => this.activeAccount = account);
    }

    ngOnInit() {
        this.getActiveAccount();
    }
}
