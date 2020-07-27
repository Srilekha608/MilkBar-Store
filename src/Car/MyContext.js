import React, { createContext } from 'react';
import Hooks from './Hooks'

export const MyContext = createContext();
export const MyProvider = props => {
    return (
        <MyContext.Provider value={{ ...Hooks() }}>
            {props.children}
        </MyContext.Provider>
    )
}