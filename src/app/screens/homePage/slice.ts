import { createSlice } from "@reduxjs/toolkit";
import { HomePageState } from "../../../libs/types/screen";
const initialState: HomePageState = {
  newBooks: [],
  popularBooks: [],
  readerRankings: [],
};

const homePageSlice = createSlice({
  name: "homePage",
  initialState,
  reducers: {
    setNewBooks: (state, action) => {
      state.newBooks = action.payload;
    },
    setPopularBooks: (state, action) => {
      state.popularBooks = action.payload;
    },
    setReaderRankings: (state, action) => {
      state.readerRankings = action.payload;
    },
  },
});

export const { setNewBooks, setPopularBooks, setReaderRankings } =
  homePageSlice.actions;

const HomePageReducer = homePageSlice.reducer;
export default HomePageReducer;
