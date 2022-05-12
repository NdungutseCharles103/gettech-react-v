import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order",
  initialState: {
    completed: false,
    products: [],
    payment: 0,
    isFetching: false,
    supplier: false,
  },
  reducers: {
    orderStart: (state)=> {
        state.isFetching = true
    },
    submitOrder: (state, action) => {
      state.products = action.payload.products;
      state.payment = action.payload.payment;
      state.isFetching = false;
    },
  },
});

export const { submitOrder } = orderSlice.actions;
export default userSlice.reducer;
