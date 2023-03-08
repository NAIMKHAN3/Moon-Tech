import React, { Children, createContext, useContext, useEffect, useReducer, useState } from 'react';
import { actionType } from '../Pages/ProductReducer/ActionType';
import { initialState, productReducer } from '../Pages/ProductReducer/ProductState';

const ProductContex = createContext([])

const Contex = ({ children }) => {

    const [state, dispatch] = useReducer(productReducer, initialState)


    useEffect(() => {
        dispatch({ type: actionType.FETCHING_START })
        fetch("https://moon-tech-server-pied.vercel.app/products")
            .then(res => res.json())
            .then(data => dispatch({ type: actionType.FETCHING_SUCCESS, payload: data }))
            .catch((e) => dispatch({ type: actionType.FETCHING_ERROR }))
    }, [])

    const data = {
        state,
        dispatch,
    }

    return (
        <ProductContex.Provider value={data}>
            {children}
        </ProductContex.Provider>
    );
};

export const useProducts = () => {
    const contex = useContext(ProductContex);
    return contex;
}

export default Contex;