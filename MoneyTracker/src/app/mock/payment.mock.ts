import { PaymentInterface } from '../interfaces/payment.interface';

export let PAYMENTS: PaymentInterface[] = [
    {"ID": 1,   "accountID": 1, "categoryID": 1, "total": 25.50,    "comment": "test comment",  "dateCreated": new Date(), "dateUpdated": new Date()},
    {"ID": 2,   "accountID": 1, "categoryID": 3, "total": 25,       "comment": "",              "dateCreated": new Date(), "dateUpdated": new Date()},
    {"ID": 3,   "accountID": 1, "categoryID": 2, "total": 32.20,    "comment": "",              "dateCreated": new Date(), "dateUpdated": new Date()},
    {"ID": 4,   "accountID": 2, "categoryID": 5, "total": 5.10,     "comment": "",              "dateCreated": new Date(), "dateUpdated": new Date()},
    {"ID": 5,   "accountID": 2, "categoryID": 6, "total": 78.50,    "comment": "one more",      "dateCreated": new Date(), "dateUpdated": new Date()}
];