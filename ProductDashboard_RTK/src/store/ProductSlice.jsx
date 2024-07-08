import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};
const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    fetchProd(state, action) {
      state.data = action.payload;
    },
  },
});



export function getProducts() {
  return async function getProductsThunk(dispatch, getState) {
    // api
    const data = await fetch("https://fakestoreapi.com/products");
    const result = data.json();
    dispatch(fetchProd(result));
  };
}

export default ProductSlice.reducer;
export const {} = ProductSlice.actions;
