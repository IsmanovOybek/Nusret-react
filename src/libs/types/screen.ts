import { Member } from "./member";
import { Order } from "./order";
import { Product } from "./product";

/* REact app state* */
export interface AppRootState {
  homePage: HomePageState;
  productsPage: ProductPageState;
  ordersPage: OrderPageState;
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
export interface OrderPageState {
  pausedOrders: Order[];
  processOrders: Order[];
  finishedOrders: Order[];
}
