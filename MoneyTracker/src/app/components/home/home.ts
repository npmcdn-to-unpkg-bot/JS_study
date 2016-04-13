import {Component}              from 'angular2/core';
import { Router, RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

import { AccountInterface }     from '../../interfaces/account.interface';
import { AccountService }       from '../../services/account.service';

@Component({
    selector: 'home',
    templateUrl: 'app/components/home/home.html',
    styleUrls: ['app/components/home/home.css'],
    providers: [AccountService],
    directives: [ROUTER_DIRECTIVES]
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
