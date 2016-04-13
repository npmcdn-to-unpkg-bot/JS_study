import { AccountInterface } from '../interfaces/account.interface';

let _ACCOUNTS: AccountInterface[] = [
        {"ID": 1,   "title": "Cash",        "balance": 255.50,      "dateCreated": new Date(),  "dateUpdated": new Date()},
        {"ID": 2,   "title": "CreditCard",  "balance": 7485.84,     "dateCreated": new Date(),  "dateUpdated": new Date()},
        {"ID": 3,   "title": "Pay-check",   "balance": 1000,        "dateCreated": new Date(),  "dateUpdated": new Date()}
    ],
    _ActiveAccount = _ACCOUNTS[0];

export let ACCOUNTS: AccountInterface[] = _ACCOUNTS;
export let ActiveAccountCtrl = {
    getActiveAccount: () => _ActiveAccount,
    setActiveAccount: (account: AccountInterface) => _ActiveAccount = account
};