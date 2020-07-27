import { useReducer, useEffect } from "react";
import reducer from './reducer'
const useAPI = () => {
    const INIT_STATE = {
        desserts: [],
        isAPILoaded: false,
        cart: [],
        totalAmount: 0,
        Frozen: [],
        cakes: [],
        Jellied: [],
        item: []
    }
    const [state, dispatch] = useReducer(reducer, INIT_STATE)
    const { desserts, totalAmount, cart,   item } = state
    useEffect((prevState) => {
        fetch('https://jsonblob.com/api/e45525ca-c5d6-11ea-a7dc-dbe9b7021a93').
            then(response => response.json()).
            then(json => {
                dispatch({
                    type: 'API_SUCCESS',
                    payload: {  desserts: [...json], isAPILoaded: true }
                })
            })
    }, []);
    useEffect((prevState) => {
        dispatch({ type: 'TOTAL_AMOUNT' })
    }, [cart]);
    const incrementCounter = (index) => {
        dispatch({
            type: 'INCREMENT_COUNTER',
            payload: { index }
        }
        )
    }
    const decrmentCounter = (index) => {
        dispatch({
            type: 'DECREMENT_COUNTER',
            payload: { index }
        }
        )
    }

    const additem = (index) => {
        dispatch({
            type: 'ADD_ITEM',
            payload: { index }


        })
    }
    const removeProduct = (index) => {
        dispatch({
            type: 'REMOVE_PRODUCT',
            payload: { index }
        })
    }
    const Jellied = () => {
        dispatch({
            type: 'JELLIED',

        })
    }
    const cakes = () => {
        dispatch({
            type: 'CAKES',

        })
    }
    const Frozen = () => {
        dispatch({
            type: 'FROZEN',

        })
    }
    const Item = (index) => {
        dispatch({
            type: 'ITEM',
            payload: { index }
        })
    }
    const reset = () => {
        dispatch({
            type: 'RESET'
        })
    }
    const addSitem = (index) => {
        dispatch({
            type: 'ADD_S_ITEM',
            payload: { index }
        })
    }
    const addsitem = (index) => {
        dispatch({
            type: 'ADD_s_ITEM',
            payload: { index }
        })
    }
    const addCitem = (index) => {
        dispatch({
            type: 'ADD_C_ITEM',
            payload: { index }
        })
    }
    const Sitem = (index) => {
        dispatch({
            type: 'S_ITEM',
            payload: { index }
        })
    }
    const sitem = (index) => {
        dispatch({
            type: 's_ITEM',
            payload: { index }
        })
    }
    const Citem = (index) => {
        dispatch({
            type: 'C_ITEM',
            payload: { index }
        })
    }


    return {
        state,
        incrementCounter,
        decrmentCounter,
        additem,
        addSitem,
        addCitem,
        addsitem,
        Sitem,
        Citem,
        sitem,
        removeProduct,
        Jellied,
        cakes,
        Frozen,
        Item,
        reset
    }
}
export default useAPI