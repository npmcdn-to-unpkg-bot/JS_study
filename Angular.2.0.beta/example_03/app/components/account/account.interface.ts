
import {Currency} from "../currency/currency.interface";

export interface Account {
    id: number,
    title: string,
    currency: Currency,
    balance: number
}