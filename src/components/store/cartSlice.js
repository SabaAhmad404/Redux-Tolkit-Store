import { createSlice } from '@reduxjs/toolkit';

const STATUSES=object.freeze({
    IDEL: 'idel',
    Loading: 'loading',
    ERROR: 'ERROR',
});
const cartSlice = createSlice({
  name: 'cart',
  initialState:{
    data: [],
    status: STATUSES.IDEL,

  },
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
    remove(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },

  },
});
export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
