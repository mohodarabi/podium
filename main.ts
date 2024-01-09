import { Chocolate } from "./chocolate/chocolate.class";
import { Invoice } from "./invoice/invoice.class";
import { SizeType } from "./size/size-type.enum";
import { Smarties } from "./smarties/smarties.class";


// =============== FIRST_ORDER ===============

let chocolate = new Chocolate(true)
let hasChocolate = chocolate.hasIt()


let smarties = new Smarties(true)
let hasSmarties = smarties.hasIt()


let icecream = new Invoice(SizeType.LARGE, hasSmarties, hasChocolate)
console.log({ firstOrder: icecream.priceCalculate() });


// =============== SECOND_ORDER ===============

chocolate = new Chocolate(false)
hasChocolate = chocolate.hasIt()


smarties = new Smarties(true)
hasSmarties = smarties.hasIt()


icecream = new Invoice(SizeType.SMALL, hasSmarties, hasChocolate)
console.log({ secondOrder: icecream.priceCalculate() });


// =============== THIRD_ORDER ===============

chocolate = new Chocolate(true)
hasChocolate = chocolate.hasIt()


smarties = new Smarties(false)
hasSmarties = smarties.hasIt()


icecream = new Invoice(SizeType.MEDIUM, hasSmarties, hasChocolate)
console.log({ thirdOrder: icecream.priceCalculate() });