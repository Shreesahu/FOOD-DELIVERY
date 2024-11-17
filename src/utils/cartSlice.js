import { createSlice } from "@reduxjs/toolkit";

const cartSlice  = createSlice({
    name: 'cart',
    initialState:{
        items:[],  
    },
    reducers:{
        addItem: (state, action) => {
            const itemIndex = state.items.findIndex(
                (item) => item.card.info.id === action.payload.card.info.id
            );

            console.log(itemIndex);
            if (itemIndex > -1) {
                // Item already exists, increase its quantity
                state.items[itemIndex].quantity += 1;
            } else {
                // Add new item with initial quantity of 1
                state.items.push({ ...action.payload, quantity: 1 });
            }
        },

        incrementQuantity: (state, action) => {
    
            const item = state.items.find((item) => item.card.info.id === action.payload);
            if (item) item.quantity += 1;
       
        },

        decrementQuantity: (state, action) => {
            const itemIndex = state.items.findIndex((item) => item.card.info.id === action.payload);
            if (itemIndex > -1) {
                const item = state.items[itemIndex];
                if (item.quantity > 1) {
                    item.quantity -= 1; // Decrease quantity
                } else {
                    state.items.splice(itemIndex, 1); // Remove item if quantity reaches 0
                }
            }
        },

        removeItem:(state,action)=>{
            console.log("Reached Here")
            state.items.splice(action.payload);
        },
        
        clearCart:(state)=>{
            state.items.length =0;
        }
    }
});
export const {addItem,removeItem,clearCart,  incrementQuantity, decrementQuantity  }= cartSlice.actions;
export default cartSlice.reducer;