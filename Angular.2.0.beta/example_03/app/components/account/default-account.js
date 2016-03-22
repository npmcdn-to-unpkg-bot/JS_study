System.register(["../currency/default-currencies"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var default_currencies_1;
    var ACCOUNT;
    return {
        setters:[
            function (default_currencies_1_1) {
                default_currencies_1 = default_currencies_1_1;
            }],
        execute: function() {
            exports_1("ACCOUNT", ACCOUNT = {
                "id": 1,
                "title": "Demo Account",
                "currency": default_currencies_1.CURRENCIES[0],
                "balance": 0
            });
        }
    }
});
//# sourceMappingURL=default-account.js.map