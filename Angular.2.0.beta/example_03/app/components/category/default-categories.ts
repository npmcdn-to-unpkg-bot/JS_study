
import {CategoryType} from "../../const/category-type";
import {Category} from "./category.interface";

export var CATEGORIES: Category[] = [
    {"id": 1, "title": "Food", "type": CategoryType.SPENDING},
    {"id": 2, "title": "House", "type": CategoryType.SPENDING},
    {"id": 3, "title": "Car", "type": CategoryType.SPENDING},
    {"id": 4, "title": "Entertainment", "type": CategoryType.SPENDING},
    {"id": 5, "title": "Restaurant", "type": CategoryType.SPENDING},

    {"id": 6, "title": "Deposit", "type": CategoryType.INCOME},
    {"id": 7, "title": "Pay-check", "type": CategoryType.INCOME}
];
