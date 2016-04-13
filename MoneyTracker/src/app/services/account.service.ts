import { Injectable }                   from 'angular2/core';

import { AccountInterface }             from '../interfaces/account.interface';
import { ACCOUNTS, ActiveAccountCtrl }  from '../mock/account.mock';

@Injectable()
export class AccountService {
    getAccounts() {
        return new Promise<AccountInterface[]> ( resolve =>
            setTimeout( () => resolve( ACCOUNTS ), 1000)
        );
    }
    getActiveAccount() {
        return new Promise<AccountInterface> (resolve =>
            setTimeout( () => resolve( ActiveAccountCtrl.getActiveAccount() ), 1000)
        );
    }
    setActiveAccount(account: AccountInterface) {
        return new Promise<AccountInterface> (resolve =>
            setTimeout( () => resolve( ActiveAccountCtrl.setActiveAccount(account) ), 1000)
        );
    }
    // getAccount(ID: number) {
    //     return Promise.resolve(ACCOUNTS).then(
    //         accounts => accounts.filter(account => account.ID === ID)[0]
    //     );
    // }
}
