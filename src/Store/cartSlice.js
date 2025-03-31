import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        amount: 0
    },
    reducers: {
        addItems: (state, action) =>{
            const existingItem = state.items.find(item => item?.card?.info?.id === action.payload.card?.info?.id);
            if(existingItem && state.items.length>0){
                existingItem.quantity += 1;
            }
            else{
                state.items.push({...action.payload,quantity:1});
            }
        },
        removeItems: (state,action) =>{
            const existingItem = state.items.find(item => item?.card?.info?.id === action.payload.card?.info?.id);
            if(existingItem && state.items.length>1){
                existingItem.quantity -= 1;
            }
            else{
                state.items.pop({existingItem});
            }
            //state.items.pop()
        },
        clearCart: (state) =>{
            state.items.length = 0;
        },
        calculateTotals: (state) =>{
            let amount = 0;
            let total = 0;
            state.items.forEach((item) =>{
                amount += item?.card?.info?.defaultPrice / 100 || item?.card?.info?.price / 100 * item?.quantity;
                // total += item.amount * item.price;
            })
            state.amount = amount;
            // state.total = total;
        }
    }
})
export const {addItems,removeItems,clearCart,calculateTotals } = cartSlice.actions;
export default cartSlice.reducer