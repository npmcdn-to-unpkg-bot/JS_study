import { Component }            from 'angular2/core';
import { Router }               from 'angular2/router';

import { CategoryInterface }    from '../../interfaces/category.interface';
import { CategoryService }      from '../../services/category.service'
import { Category }             from "./category";

@Component({
    selector: 'categories-list',
    templateUrl: 'app/components/category/categories-list.html',
    providers: [CategoryService],
    directives: [Category]
})

export class CategoriesList {
    categories: CategoryInterface[];

    constructor(
        private _router: Router,
        private _categoryService: CategoryService
    ) { }

    getCategories() {
        this._categoryService.getCategories().then(categories => this.categories = categories);
    }

    ngOnInit() {
        this.getCategories();
    }
}