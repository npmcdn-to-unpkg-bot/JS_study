import {Component} from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import {AccountComponent} from "./components/account/account.component";
import {AccountService} from "./components/account/account.service";
import {PaymentComponent} from "./components/payment/payment.component";
import {PaymentService} from "./components/payment/payment.service";

@Component({
    selector: 'my-app',
    template: `
    <h1>Money Tracker</h1>
    <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS,
        AccountService,
        PaymentService
    ]
})

@RouteConfig([
    {
        path: '/account',
        name: 'Account',
        component: AccountComponent,
        useAsDefault: true
    },
    {
        path: '/add-payment',
        name: 'AddPayment',
        component: PaymentComponent
    }/*,
    {
        path: '/category-select',
        name: 'CategorySelect',
        component: CategoryComponent
    }*/
])

export class AppComponent { }
