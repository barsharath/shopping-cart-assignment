const initialState = {
    items: [],
    totalPrice: 0,
    totalItems: 0
};
const cartReducer = (state = initialState, action) => {
    const product = action.payload;
    switch (action.type) {
        case 'INCREMENT_QTY':
            var item = state.items.find(o => o.id === product.id);
            if (!item) {
                product.qty = 1;
                return {
                    ...state,
                    items: [...state.items, product],
                    totalItems: state.totalItems + 1,
                    totalPrice: state.totalPrice + product.price
                };
            } else {
                item.qty += 1;
                return {
                    ...state,
                    totalItems: state.totalItems + 1,
                    totalPrice: state.totalPrice + item.price
                };
            }
        case 'DECREMENT_QTY':
            var item = state.items.find(o => o.id === product.id);
            if (item) {
                item.qty -= 1;
                if (item.qty === 0) {
                    const arr = state.items.filter(o => o.qty !== 0);
                    return {
                        ...state,
                        items: arr,
                        totalItems: state.totalItems - 1,
                        totalPrice: state.totalPrice - item.price
                    };
                } else if (item.qty > 0) {
                    return {
                        ...state,
                        totalItems: state.totalItems - 1,
                        totalPrice: state.totalPrice - item.price
                    };
                }

            } else {
                return state
            }

        default:
            return state;
    }
};
export default cartReducer;