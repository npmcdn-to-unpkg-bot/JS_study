
export interface Payment {
    id: number,
    accountId: number,
    categoryId: number,
    total: number,
    comment?: string,
    createdOn?: any,
}