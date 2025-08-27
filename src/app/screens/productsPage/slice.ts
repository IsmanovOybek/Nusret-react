import { createSlice } from "@reduxjs/toolkit";
import { ProductPageState } from "../../../libs/types/screen";

const initialState: ProductPageState = {
  libruary: null,
  chosenProduct: null,
  products: [],
};

const productPageSlice = createSlice({
  name: "productPage",
  initialState,
  reducers: {
    setLibruary: (state, action) => {
      state.libruary = action.payload;
    },
    setChosenProduct: (state, action) => {
      state.chosenProduct = action.payload;
    },
    setProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { setLibruary, setChosenProduct, setProducts } =
  productPageSlice.actions;

const ProductsPageReducer = productPageSlice.reducer;
export default ProductsPageReducer;
