import React from "react";
import { Box, Container, Stack } from "@mui/material";
import AspectRatio from "@mui/joy/AspectRatio";
import { CssVarsProvider } from "@mui/joy/styles";
import CardOverflow from "@mui/joy/CardOverflow";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Divider from "../../components/divider";

import { createSelector } from "reselect";
import { retrieveNewBooks } from "./selector";
import { useSelector } from "react-redux";
import { Product } from "../../../libs/types/product";
import { serverApi } from "../../../libs/config";
import { ProductCollection } from "../../../libs/enums/product.enum";

const newBooksRetriever = createSelector(retrieveNewBooks, (newBooks) => ({
  newBooks
}));

export default function NewBooks() {
  const {newBooks} = useSelector(newBooksRetriever)
  return (
    <div className={"new-products-frame"}>
      <Container>
        <Stack className={"main"}>
          <Box className={"category-title"}>New Books</Box>
          <Stack className={"cards-frame"}>
            <CssVarsProvider>
              {newBooks.length !== 0 ? (
                newBooks.map((product: Product) => {
                  const imagePath = `${serverApi}/${product.productImages[0]}`;
                  const sizeVolume =
                  product.productCollection === ProductCollection.HISTORY
                    ? product.productVolume
                    : product.productSize ;
                  return (
                    <Card key={product._id} variant="outlined" className={"card"}>
                      <CardOverflow className="product-sale1">
                        <div className="product-sale2">{sizeVolume}</div>
                        <AspectRatio ratio="1">
                          <img src={imagePath} alt="" />
                        </AspectRatio>
                      </CardOverflow>

                      <CardOverflow variant="soft" className="product-detail">
                        <Stack className="info">
                          <Stack flexDirection="row">
                            <Typography className="title">
                              {product.productName}
                            </Typography>
                            <Divider width="2" height="24" bg="#d9d9d9" />
                            <Typography className="price">${product.productPrice}</Typography>
                          </Stack>
                          <Stack>
                            <Typography className="views">
                            {product.productViews}
                              <VisibilityIcon
                                sx={{ fontSize: 20, marginLeft: "5px" }}
                              />
                            </Typography>
                          </Stack>
                        </Stack>
                      </CardOverflow>
                    </Card>
                  );
                })
              ) : (
                <Box className="no-data">New products are not aviable</Box>
              )}
            </CssVarsProvider>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
