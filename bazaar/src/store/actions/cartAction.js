
import {
    INCREMENT_QTY,
    DECREMENT_QTY,
} from '../actionConstants';


export const removeFromCart = (product) => {
    return {
        type: DECREMENT_QTY,
        payload: product
    }
};
export const addToCart = (product) => {
    return {
        type: INCREMENT_QTY,
        payload: product
    }
};