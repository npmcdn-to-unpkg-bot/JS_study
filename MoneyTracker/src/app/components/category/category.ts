import { Component }            from 'angular2/core';

import { CategoryInterface }    from '../../interfaces/category.interface';

@Component({
    selector: 'category',
    templateUrl: 'app/components/category/category.html',
    styleUrls: [],
    directives: [],
    inputs: ['data']
})

export class Category {
    data: CategoryInterface;

    constructor() {}
}