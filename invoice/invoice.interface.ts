import { SizeType } from "../size/size-type.enum"

export interface IInvoice {
    sizePrice: SizeType
    smarties: boolean
    chocolate: boolean
    priceCalculate(): number
}