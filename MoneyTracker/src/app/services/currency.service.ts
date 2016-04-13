import { Injectable }           from 'angular2/core';

import { CurrencyInterface }    from '../interfaces/currency.interface';
import { CURRENCIES }           from '../mock/currency.mock';

@Injectable()
export class CurrencyService {
    getCurrencies() {
        return new Promise<CurrencyInterface[]> ( resolve =>
            setTimeout( () => resolve( CURRENCIES ), 1000)
        );
    }
    getCurrency(ID: number) {
        return new Promise<CurrencyInterface> ( resolve =>
            setTimeout( () => 
                resolve( CURRENCIES.filter( (currency) => currency.ID == ID )[0] ),
                1000
            )
        );
    }
}

