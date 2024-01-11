const initialState = {
    data: [],
    isLoading: true
}


const productReducer = (state = initialState, action) => {
    switch(action.type){
        case "PRODUCT":
            return{
                data : action.payload.product
            }
        default:
            return state
    }
}



export {productReducer}