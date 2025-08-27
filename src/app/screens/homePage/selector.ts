import { createSelector } from "reselect";
import { AppRootState } from "../../../libs/data/types/screen";

const selectHomePage = (state: AppRootState) => state.homePage;

export const retrieveNewBooks = createSelector(
  selectHomePage,
  (HomePage) => HomePage.NewBooks
);

export const retrievePopularDishes = createSelector(
  selectHomePage,
  (HomePage) => HomePage.popularBooks
);

export const retrievereaderRankings = createSelector(
  selectHomePage,
  (HomePage) => HomePage.readerRankings
);
