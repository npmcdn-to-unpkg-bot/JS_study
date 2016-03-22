System.register(['angular2/core', 'angular2/router', "./account.service", "../payment/payment.service", "../../const/category-type"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, account_service_1, payment_service_1, category_type_1;
    var AccountComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (account_service_1_1) {
                account_service_1 = account_service_1_1;
            },
            function (payment_service_1_1) {
                payment_service_1 = payment_service_1_1;
            },
            function (category_type_1_1) {
                category_type_1 = category_type_1_1;
            }],
        execute: function() {
            AccountComponent = (function () {
                function AccountComponent(_accountService, _paymentService, _router) {
                    this._accountService = _accountService;
                    this._paymentService = _paymentService;
                    this._router = _router;
                }
                AccountComponent.prototype.getAccount = function () {
                    var _this = this;
                    this._accountService.getAccount()
                        .then(function (account) { return _this.account = account; });
                };
                AccountComponent.prototype.showPayments = function () {
                };
                AccountComponent.prototype.addSpending = function () {
                    this._paymentService.setPaymentType(category_type_1.CategoryType.SPENDING);
                    this._router.navigate(['AddPayment']);
                };
                AccountComponent.prototype.addIncome = function () {
                    this._paymentService.setPaymentType(category_type_1.CategoryType.INCOME);
                    this._router.navigate(['AddPayment']);
                };
                AccountComponent.prototype.ngOnInit = function () {
                    this.getAccount();
                };
                AccountComponent = __decorate([
                    core_1.Component({
                        selector: 'account-info',
                        templateUrl: 'app/components/account/account.component.html'
                    }), 
                    __metadata('design:paramtypes', [account_service_1.AccountService, payment_service_1.PaymentService, router_1.Router])
                ], AccountComponent);
                return AccountComponent;
            })();
            exports_1("AccountComponent", AccountComponent);
        }
    }
});
//# sourceMappingURL=account.component.js.map