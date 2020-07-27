const reducer = (state, action) => {
    const { type, payload } = action
    const { cars, cart } = state
   
    switch (type) {
        case 'API_SUCCESS': {
           
            return {
                ...state,
                ...payload
            }
        }
        case 'CAR_DETAILS': {
            return {
                ...state,
                ...payload
    
            }
        } 
        case 'ADD_CART': {
            return {
                ...state,
                ...payload
    
            }
        } 
        case 'REMOVE_PRODUCT': {

            const { index } = payload
            const Id = cart[index].id

            cars[Id - 1].incart = "false"

            cars[Id - 1].incart = "false"

            cart.splice(index, 1)

            return {
                ...state,
                cars: [...cars],
                cart: [...cart]
            }
        }
        case 'INCREMENT_COUNTER': {
            const { index } = payload
            cart[index].quantity++
            return {
                ...state,
                
            }
        }
        case 'DECREMENT_COUNTER': {
            const { index } = payload
            cart[index].quantity--
            return {
                ...state,
                cart: [...cart]
            }
        }
        case 'RESET': {
            for (var i = 0; i < cars.length; i++) {
                cars[i].incart = "false"
            }

            return {
                ...state,
                cars: [...cars],
                cart: []
            }
        }
        case 'TOTAL_AMOUNT': {
            const totalCost = cart.map(Product => parseInt(Product.Price)
                * Product.quantity)
            return {
                ...state,
                totalAmount: totalCost.reduce((acc, amount) => acc + amount, 0)
            }
        }
        default: {
            return state
        }
    }
}
export default reducer