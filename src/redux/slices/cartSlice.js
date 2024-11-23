import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
  totalPrice: 0,
  count: 0,
  typeName: ["тонкое", "традиционное"], 
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        // addItem(state, action) {
        //     state.items.push(action.payload);
        //     state.totalPrice = state.items.reduce((sum, obj) => {   // для изменения цены на иконке корзины при добавлении пиццы
        //         return obj.price + sum
        //     },0)
        // },
        
        addItem(state, action) {
           const findItem = state.items.find((obj) => obj.id === action.payload.id)
            
           if(findItem) {
            findItem.count++;
           } else {
            state.items.push({
                ...action.payload,
                count: 1,
            })
           }
           state.totalPrice = state.items.reduce((sum, obj) => {
                    return (obj.price * obj.count) + sum
           }, 0  
           
)},
        removeItem(state,action) {
            state.items = state.items.filter((obj) => obj.id === action.payload);
            
        },
        plusItem(state,action) {
            const findItem = state.items.find((obj) => obj.id === action.payload);
            if(findItem) {
                findItem.count++
            } 
            state.totalPrice = state.items.reduce((sum, obj) => {
                return (obj.price * obj.count) + sum
            }, 0)
            
        },
        minusItem(state,action) {
            const findItem = state.items.find((obj) => obj.id === action.payload);
            if(findItem) {
                findItem.count = findItem.count - 1
            } 
            state.totalPrice = state.items.reduce((sum, obj) => {
                return (obj.price * obj.count) + sum
            }, 0)
        },
        clearItem(state) {
            state.items = []
            state.totalPrice = 0
            state.count = 0
        }
    }
})


export const {addItem, removeItem, clearItem, plusItem, minusItem} = cartSlice.actions;
export default cartSlice.reducer; 