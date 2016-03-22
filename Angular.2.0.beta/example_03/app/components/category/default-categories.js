System.register(["../../const/category-type"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var category_type_1;
    var CATEGORIES;
    return {
        setters:[
            function (category_type_1_1) {
                category_type_1 = category_type_1_1;
            }],
        execute: function() {
            exports_1("CATEGORIES", CATEGORIES = [
                { "id": 1, "title": "Food", "type": category_type_1.CategoryType.SPENDING },
                { "id": 2, "title": "House", "type": category_type_1.CategoryType.SPENDING },
                { "id": 3, "title": "Car", "type": category_type_1.CategoryType.SPENDING },
                { "id": 4, "title": "Entertainment", "type": category_type_1.CategoryType.SPENDING },
                { "id": 5, "title": "Restaurant", "type": category_type_1.CategoryType.SPENDING },
                { "id": 6, "title": "Deposit", "type": category_type_1.CategoryType.INCOME },
                { "id": 7, "title": "Pay-check", "type": category_type_1.CategoryType.INCOME }
            ]);
        }
    }
});
//# sourceMappingURL=default-categories.js.map