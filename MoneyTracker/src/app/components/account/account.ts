import { Component }            from 'angular2/core';

import { AccountInterface }     from '../../interfaces/account.interface';

@Component({
    selector: 'account',
    templateUrl: 'app/components/account/account.html',
    styleUrls: [],
    directives: [],
    inputs: ['data']
})

export class Account {
    data: AccountInterface;
    
    constructor() {}

}