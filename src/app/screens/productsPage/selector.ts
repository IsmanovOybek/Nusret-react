import { createSelector } from "reselect";
import { AppRootState } from "../../../libs/types/screen";

const selectProductPage = (state: AppRootState) => state.productsPage;

export const retrieveLibruary = createSelector(
  selectProductPage,
  (ProductsPage) => ProductsPage.libruary
);
export const retrieveChosenProduct = createSelector(
  selectProductPage,
  (ProductsPage) => ProductsPage.chosenProduct
);
export const retrieveProducts = createSelector(
  selectProductPage,
  (ProductsPage) => ProductsPage.products
);
