import { Injectable }           from 'angular2/core';

import { CategoryInterface }    from '../interfaces/category.interface';
import { CATEGORIES }           from '../mock/category.mock';

@Injectable()
export class CategoryService {
    getCategories() {
        return new Promise<CategoryInterface[]> ( resolve =>
            setTimeout( () => resolve( CATEGORIES ), 1000)
        );
    }

    // getCategory(ID: number) {
    //     return Promise.resolve(CATEGORIES).then(
    //         categories => categories.filter(category => category.ID === ID)[0]
    //     );
    // }
}

