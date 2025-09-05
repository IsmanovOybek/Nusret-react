import React from "react";
import "./css/app.css";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { RippleBadge } from "../src/MaterialTheme/styled";
import { Link, Route, Switch, useLocation } from "react-router-dom";
import { HomeNavbar } from "./app/components/headers/HomeNavbar";
import { OtherNavbar } from "./app/components/headers/OtherNavbar";
import Footer from "./app/components/footer";
import "./css/app.css";
import "./css/navbar.css";
import "./css/footer.css";
import "./css/product.css";
import HelpPage from "./app/screens/helpPage";
import HomePage from "./app/screens/homePage";
import ProductsPage from "./app/screens/productsPage";
import OrdersPage from "./app/screens/ordersPage";
import UserPage from "./app/screens/userPage";
import useBasket from "./app/hooks/useBasket";

function App() {
  const location = useLocation();
  console.log("location:", location);
  const { cartItems, onAdd, onRemove, onDelete, onDeleteAll } = useBasket();

  return (
    <>
      {location.pathname === "/" ? (
        <HomeNavbar
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
          onDelete={onDelete}
          onDeleteAll={onDeleteAll}
        />
      ) : (
        <OtherNavbar
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
          onDelete={onDelete}
          onDeleteAll={onDeleteAll}
        />
      )}

      <Switch>
        <Route path="/products">
          <ProductsPage onAdd={onAdd}/>
        </Route>
        <Route path="/orders">
          <OrdersPage />
        </Route>
        <Route path="/member-page">
          <UserPage />
        </Route>
        <Route path="/help">
          <HelpPage />
        </Route>
        <Route path="/">
          <HomePage onAdd={onAdd} />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
