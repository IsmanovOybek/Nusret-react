import { createSlice } from "@reduxjs/toolkit";
import { HomePageState } from "../../../libs/data/types/screen";

const initialState: HomePageState = {
  NewBooks: [],
  popularBooks: [],
  readerRankings: [],
};

const homePageSlice = createSlice({
  name: "homePage",
  initialState,
  reducers: {
    setNewBooks: (state, action) => {
      state.NewBooks = action.payload;
    },
    setpopularBooks: (state, action) => {
      state.popularBooks = action.payload;
    },
    readerRankings: (state, action) => {
      state.readerRankings = action.payload;
    },
  },
});

export const { setNewBooks, setpopularBooks, readerRankings } =
  homePageSlice.actions;

const HomePageReducer = homePageSlice.reducer;
export default HomePageReducer;
