// cartSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
        const cartQty = state.items.filter((item) => item.card.info.id === action.payload.info.id);        
        if (cartQty.length === 0) {
            const newItem = {
                card: {
                info: {
                    ...action.payload.info,
                    quantity: action.payload.quantity || 1, // Initialize quantity if not present
                },
                },
            };
            state.items.push(newItem);
            toast.success(`${action.payload.name} is added to the cart!`, {position:'top-right'})
        }else{
            const item = state.items.find((item) => item.card.info.id === action.payload.info.id);
            if (item ) {
              item.card.info.quantity += 1;
            }
        }
        
    },
    removeItem: (state, action) => {
      const index = state.items.findIndex((item) => item.card.info.id === action.payload);
      if (index !== -1) {
        state.items.splice(index, 1);
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
    incrementQuantity: (state, action) => {
        console.log('Increment action payload:', action.payload);
        const item = state.items.find((item) => item.card.info.id === action.payload);
        if (item ) {
          item.card.info.quantity += 1;
        }
      },
      decrementQuantity: (state, action) => {
        const item = state.items.find((item) => item.card.info.id === action.payload);
        if (item) {
            if (item.card.info.quantity === 1) {
                const cartQty = state.items.filter((item) => item.card.info.id !== action.payload);
                return {...state, items: cartQty }
            } else {
                item.card.info.quantity -= 1;   
            }
        }
      },      
  },
});

export const { addItem, removeItem, clearCart, incrementQuantity, decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";

// const cartSlice = createSlice({
//     name : 'cart',
//     initialState: {
//         items: []
//     },
//     reducers: {
//         addItem: (state, action) => {
//             state.items.push(action.payload)
//         },
//         removeItem: (state, action) => {
//             const index = state.items.findIndex((item) => item.card.info.id === action.payload);
//             if (index !== -1) {
//                 state.items.splice(index, 1);
//             }
//         },
//         clearCart: (state) => {
//             state.items.length =0;
//         },
//         incrementQuantity: (state, action) => {
//             const item = state.items.find((item) => item.card.info.id === action.payload);
//             if (item && item.quantity < item.card.info.inStock) {
//               item.quantity += 1;
//             }
//         },
//         decrementQuantity: (state, action) => {
//             const item = state.items.find((item) => item.card.info.id === action.payload);
//             if (item && item.quantity > 1) {
//                 item.quantity -= 1;
//             }
//         },
          
//     },
// })

// export const {addItem, removeItem, clearCart, incrementQuantity, decrementQuantity} = cartSlice.actions
// export default cartSlice.reducer