import { createSelector } from "reselect";
import { AppRootState } from "../../../libs/types/screen";

const selectHomePage = (state: AppRootState) => state.homePage;

export const retrieveNewBooks = createSelector(
  selectHomePage,
  (HomePage) => HomePage.newBooks
);

export const retrievePopularBooks = createSelector(
  selectHomePage,
  (HomePage) => HomePage.popularBooks
);

export const retrievereaderRankings = createSelector(
  selectHomePage,
  (HomePage) => HomePage.readerRankings
);
