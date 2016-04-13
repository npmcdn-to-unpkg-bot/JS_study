
export interface PaymentInterface {
    ID:             number,
    accountID:      number,
    categoryID:     number,
    total:          number,
    comment?:       string,
    dateCreated:    Date,
    dateUpdated:    Date
}