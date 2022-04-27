import productsReducer from './productsReducer';
import cartReducer from './cartReducer';
import categoriesReducer from './categoriesReducer'
import { combineReducers } from 'redux';
const rootReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer,
    categories: categoriesReducer
});
export default rootReducer;