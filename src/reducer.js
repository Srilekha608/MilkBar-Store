const reducer = (state, action) => {
    const { type, payload } = action
    const {  desserts, cart, Jellied, Frozen, cakes } = state

    switch (type) {
        case 'API_SUCCESS': {
            return {
                ...state,
                ...payload
            }
        } case 'INCREMENT_COUNTER': {
            const { index } = payload
            cart[index].quantity++
            return {
                ...state,
                cart: [...cart]
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
        case 'TOTAL_AMOUNT': {
            const totalCost = cart.map(Product => parseInt(Product.price)
                * Product.quantity)
            return {
                ...state,
                totalAmount: totalCost.reduce((acc, amount) => acc + amount, 0)
            }
        }
        case 'ADD_ITEM': {
            const { index } = payload
            desserts[index].incart = "true"
            return {
                ...state,
                desserts: [...desserts],
                cart: [...cart,desserts[index]],
            }

        }
        case 'REMOVE_PRODUCT': {

            const { index } = payload
            const Id = cart[index].id

            desserts[Id - 1].incart = "false"

            desserts[Id - 1].incart = "false"

            cart.splice(index, 1)

            return {
                ...state,
                desserts: [...desserts],
                cart: [...cart]
            }
        }
        case 'JELLIED': {
            const Jellied= desserts.filter( dessert=> dessert.category == "Jellied")
            return {
                ...state,
                Jellied: [...Jellied]
            }

        }
        case 'CAKES': {
            const cakes = desserts.filter(dessert=> dessert.category == "cakes")
            return {
                ...state,
                cakes: [...cakes]
            }

        }
        case 'FROZEN': {
            const Frozen = desserts.filter(dessert => dessert.category == "Frozen")
            return {
                ...state,
                Frozen: [...Frozen]
            }

        }
        case 'ITEM': {

            const { index } = payload
            return {
                ...state,
                item: [desserts[index]],

            }

        }
        case 'S_ITEM': {
            const { index } = payload
            return {
                ...state,
                item: [Jellied[index]],

            }

        }
        case 's_ITEM': {
            const { index } = payload
            return {
                ...state,
                item: [Frozen[index]],

            }

        }
        case 'C_ITEM': {
            const { index } = payload
            return {
                ...state,
                item: [cakes[index]],

            }

        }
        case 'RESET': {
            for (var i = 0; i < desserts.length; i++) {
                desserts[i].incart = "false"
            }

            return {
                ...state,
                desserts: [...desserts],
                cart: []
            }
        }
        case 'ADD_S_ITEM': {

            const { index } = payload
            Jellied[index].incart = "true"
            return {
                ...state,
                Jellied: [...Jellied],
                cart: [...cart, Jellied[index]],
            }
        }
        case 'ADD_s_ITEM': {

            const { index } = payload
            Frozen[index].incart = "true"
            return {
                ...state,
                Frozen: [...Frozen],
                cart: [...cart, Frozen[index]],
            }
        }
        case 'ADD_C_ITEM': {

            const { index } = payload
            cakes[index].incart = "true"
            return {
                ...state,
                cakes: [...cakes],
                cart: [...cart, cakes[index]]
            }
        }
        case 'RESET': {
            for (var i = 0; i < desserts.length; i++) {
                desserts[i].incart = "false"
            }
            return {
                ...state,
                desserts: [...desserts],
                cart: []
            }
        }
        default: {
            return state
        }
    }
}
export default reducer