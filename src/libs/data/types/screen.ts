import { Member } from "./member";
import { Product } from "./product";

/* REact app state* */
export interface AppRootState {
  homePage: HomePageState;
}
/* homepage* */
export interface HomePageState {
  popularDishes: Product[];
  newDishes: Product[];
  topUsers: Member[];
}
/* orderpage* */
