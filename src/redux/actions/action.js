import { BUY_LAPTOP } from "./actionType"
import { BUY_MOBILE } from "./actionType"
import { BUY_BOOK } from "./actionType"
export const buyLaptop = () => {
    return{
        type: BUY_LAPTOP
    }
}

export const buyMobile = () => {
    return{
        type: BUY_MOBILE
    }
}

export const buyBook = () => {
    return{
        type: BUY_BOOK
    }
}



// export default buyLaptop