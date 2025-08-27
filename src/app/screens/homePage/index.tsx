import { Container } from "@mui/material";
import "../../../css/home.css";
import NewBooks from "./NewBooks";
import Statistics from "./Statistics";
import PopularBooks from "./PopularBooks";
import Advertisement from "./Advertisement";
import ActiveUsers from "./ActiveUsers";
import Events from "./Events";

import { useDispatch } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { setNewBooks, setPopularBooks, setReaderRankings } from "./slice";
import { useEffect } from "react";
import ProductService from "../../services/ProductService";
import MemberService from "../../services/MemberService";
import { Product } from "../../../libs/types/product";
import { Member } from "../../../libs/types/member";

// redux slice vs selector
const actionDispatch = (dispatch: Dispatch) => ({
  setNewBooks: (data: Product[]) => dispatch(setNewBooks(data)),
  setpopularBooks: (data: Product[]) => dispatch(setPopularBooks(data)),
  setReaderRankings: (data: Member[]) => dispatch(setReaderRankings(data)),
});

export default function HomePage() {
  const { setNewBooks, setpopularBooks, setReaderRankings } = actionDispatch(
    useDispatch()
  );

  useEffect(() => {
    // Beckend server data fetch => Data
    const product = new ProductService();

    product
      .getProducts({
        page: 1,
        limit: 4,
        order: "createdAt",
        // productCollection: ProductCollection.DISH,
      })
      .then((data) => {
        console.log("data passed here:", data);
        setNewBooks(data);
      })
      .catch((err) => console.log(err));
    product
      .getProducts({
        page: 1,
        limit: 4,
        order: "productViews",
        // productCollection: ProductCollection.DISH,
      })
      .then((data) => {
        console.log("data passed here:", data);
        setpopularBooks(data);
      })
      .catch((err) => console.log(err));
    const member = new MemberService();
    member
      .readerRankings()
      .then((data) => {
        setReaderRankings(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={"homepage"}>
      <NewBooks />
      <Statistics />
      <PopularBooks />
      <Advertisement />
      <ActiveUsers />
      <Events />
    </div>
  );
}
