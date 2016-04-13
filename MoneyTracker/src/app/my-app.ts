import { Component } from 'angular2/core';
import { Router, RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

import { Home } from './components/home/home';
import { AccountsList } from './components/account/accounts-list';
import { CategoriesList } from './components/category/categories-list';

@Component({
    selector: 'my-app',
    templateUrl: 'app/my-app.html',
    styleUrls: ['app/my-app.css'],
    providers: [],
    pipes: [],
    directives: [ROUTER_DIRECTIVES],
})
@RouteConfig([
    { path: '/home',       component: Home,        name: 'Home', useAsDefault: true },
    { path: '/accounts',      component: AccountsList,       name: 'AccountsList' },
    { path: '/categories', component: CategoriesList, name: 'CategoriesList' }
    
])
export class MyApp {

    constructor() {}

}
