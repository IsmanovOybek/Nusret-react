import { Member } from "./member";
import { Product } from "./product";

/* REact app state* */
export interface AppRootState {
  homePage: HomePageState;
}
/* homepage* */
export interface HomePageState {
  NewBooks: Product[];
  popularBooks: Product[];
  readerRankings: Member[];
}
/* orderpage* */
