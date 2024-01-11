

export const byThunk = (product) => {
    return{
        type: "PRODUCT",
        payload: {
            product
        }
    }
}



const loadThunk = () => async dispatch => {

    try {
        const response = await fetch("https://dummyjson.com/recipes")
        const data = await response.json()
        dispatch(byThunk(data))
    } catch (error) {
        console.log(error);
    }
    }

export {loadThunk}