
import { Injectable } from 'angular2/core';

import {ACCOUNT} from "./default-account";


@Injectable()


export class AccountService {

    getAccount() {
        return Promise.resolve(ACCOUNT);
    }

}