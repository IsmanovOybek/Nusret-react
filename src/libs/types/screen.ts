import { Member } from "./member";
import { Product } from "./product";

/* REact app state* */
export interface AppRootState {
  homePage: HomePageState;
  productsPage: ProductPageState;
}
/* homepage* */
export interface HomePageState {
  newBooks: Product[];
  popularBooks: Product[];
  readerRankings: Member[];
}
export interface ProductPageState {
  libruary: Member | null;
  chosenProduct: Product | null;
  products: Product[];
}
/* orderpage* */
