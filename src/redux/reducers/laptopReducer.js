import { BUY_LAPTOP } from "../actions/actionType";

const initialState = {
    noOFLaptop : 100
}

const laptopReducer = (state = initialState , action) => {
    switch(action.type){
        case BUY_LAPTOP:
            console.log(state.noOFLaptop)
            return {noOFLaptop: state.noOFLaptop - 1}
        default:
            return state;
    }

}

export default laptopReducer