import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { Container } from "@mui/material";
import Products from "./Products";
import ChosenProduct from "./ChosenProduct";
import { CartItem } from "../../../libs/types/search";

interface ProductPageProps {
    onAdd: (item: CartItem) => void;
}

export default function ProductsPage(props: ProductPageProps) {
    const {onAdd} = props;
    const products = useRouteMatch()


    return (
        <div className={"products-page"}>
            <Switch>
                <Route path={`${products.path}/:productId`}>
                    <ChosenProduct  onAdd={onAdd}/>
                </Route>
                <Route path={`${products.path}`}>
                    <Products onAdd={onAdd} />
                </Route>
            </Switch>
        </div>
    )
}