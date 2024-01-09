import { FeatureType } from "../feature/feature-type.enum"
import { SizeType } from "../size/size-type.enum"
import { IInvoice } from "./invoice.interface"


export class Invoice implements IInvoice {

    sizePrice: SizeType
    smarties: boolean
    chocolate: boolean

    constructor(sizePrice: SizeType, smarties: boolean, chocolate: boolean) {
        this.sizePrice = sizePrice
        this.smarties = smarties
        this.chocolate = chocolate
    }


    priceCalculate(): number {
        return this.sizePrice + (this.sizePrice * this.percentCalculator())
    }


    private percentCalculator(): number {

        switch (true) {
            case this.smarties && this.chocolate:
                return FeatureType.BOTH

            case this.chocolate:
                return FeatureType.CHOCOLATE

            case this.smarties:
                return FeatureType.SMARTIES

            default:
                return 0
        }

    }

}