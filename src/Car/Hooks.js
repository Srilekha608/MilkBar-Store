import { useReducer, useEffect } from "react";
import reducer from './reducer'
import counter from './Car/counter'

const Hooks = () => {
    const INIT_STATE = {
        cars: [],
        isAPILoaded: false,
        individualCar:{},
        latestCars: [],
        bestSellerCars: [],
        cart: [],
        totalAmount: 0,
        item: []
    }
    const [state, dispatch] = useReducer(reducer, INIT_STATE)
    const { cars, totalAmount, cart,  item } = state
    useEffect((prevState) => {
        fetch('https://jsonblob.com/api/2b0ea1cc-b5f7-11ea-add9-23a7c262b1a8').
            then(response => response.json()).
            then(json => {
                dispatch({
                    type: 'API_SUCCESS',
                    payload: { cars: [...json], isAPILoaded: true ,
                    latestCars: [...json.filter(a => a.carName == "BMW X1" || a.carName == "Audi A8 L" || a.carName == "Volkswagen Vento")],
                    bestSellerCars: [...json.filter(a => a.carName == "Tata Tigor" || a.carName == "Audi S5" || a.carName == "Ford Figo")]
                }})
            })
    }, []);
    useEffect((prevState) => {
        dispatch({ type: 'TOTAL_AMOUNT' })
    }, [...cart]);


    const handleThirdPage = (s) => {

        dispatch({
            type: "CAR_DETAILS",
            payload: { individualCar: { ...cars.filter((a, i) => i == s)[0] } }
        })

    }
    const addtocart = (i) => {

        dispatch({
            type: "ADD_CART",
            payload: { cart:[...cart,cars[i]]}
        })
    }
        const Increment= (index) => {
            dispatch({
                type: "INCREMENT_COUNTER",
         payload:{index,cart:[...cart]}
            }
            )
        }
        const removeProduct = (index) => {
            dispatch({
                type: 'REMOVE_PRODUCT',
                payload: { index }
            })
        }
        const reset = () => {
            dispatch({
                type: 'RESET'
            })
        }
        const Decrement = (index) => {
            dispatch({
                type: 'DECREMENT_COUNTER',
                payload: { index }
            }
            )
        }

    
    return {
        state,
        addtocart,
        handleThirdPage,
        Increment,
        Decrement,
        removeProduct,
        totalAmount,
        reset
      
    
       
    }
}
export default Hooks