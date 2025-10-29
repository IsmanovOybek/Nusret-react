import React from "react";
import { Box, Container, Stack } from "@mui/material";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import { CssVarsProvider } from "@mui/joy/styles";
import CardOverflow from "@mui/joy/CardOverflow";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import Button from "@mui/joy/Button";

import { createSelector } from "reselect";
import { retrievePopularBooks } from "./selector";
import { useSelector } from "react-redux";
import { Product } from "../../../libs/types/product";
import { serverApi } from "../../../libs/config";
import { CartItem } from "../../../libs/types/search";
import { Bolt } from "@mui/icons-material";

const popularBooksRetriever = createSelector(
  retrievePopularBooks,
  (popularBooks) => ({
    popularBooks,
  })
);

interface PopularBooksProps {
  onAdd: (item: CartItem) => void;
}

export default function PopularBooks(props: PopularBooksProps) {
  const { onAdd } = props;
  const { popularBooks } = useSelector(popularBooksRetriever);
  return (
    <div className="popular-dishes-frame">
      <Container>
        <Stack className="popular-section">
          <Box className="category-title">Popular Books</Box>
          <Stack className="cards-frame">
            {popularBooks.length !== 0 ? (
              popularBooks.map((product: Product) => {
                const imagePath = `${serverApi}/${product.productImages[0]}`;
                return (
                  <CssVarsProvider key={product._id}>
                    <Card className={"card"}>
                      <CardCover>
                        <img src={imagePath} alt="" />
                      </CardCover>

                      <CardCover className={"card-cover"} />
                      <CardContent sx={{ justifyContent: "flex-end" }}>
                        <Stack
                          flexDirection={"row"}
                          justifyContent={"space-between"}
                        >
                          <Typography
                            level="h2"
                            fontSize="lg"
                            textColor="#fff"
                            mb={1}
                          >
                            {product.productName}
                          </Typography>
                          <Button
                            className="shop-btn"
                            onClick={(e) => {
                              onAdd({
                                _id: product._id,
                                quantity: 1,
                                name: product.productName,
                                price: product.productPrice,
                                image: product.productImages[0],
                              });

                              e.stopPropagation();
                            }}
                          >
                            <img
                              className="shop-btn-img"
                              src="/icons/shopping-cart.svg"
                            />
                          </Button>
                          <Typography
                            sx={{
                              fontWeight: 600,
                              color: "transparent",
                              backgroundImage:
                                "linear-gradient(90deg,rgb(5, 3, 0),rgb(17, 11, 1))",
                              backgroundClip: "text",
                              WebkitBackgroundClip: "text",
                              display: "flex",
                              alignItems: "center",
                              fontSize: "19px",
                              letterSpacing: "0.5px",
                              textShadow: "0 1px 2px rgba(0,0,0,0.2)",
                            }}
                          >
                            {product.productViews}
                            <VisibilityIcon
                              sx={{ fontSize: 25, marginLeft: "5px" }}
                            />
                          </Typography>
                        </Stack>
                      </CardContent>
                      <CardOverflow
                        sx={{
                          display: "flex",
                          gap: 1.5,
                          py: 1.5,
                          px: "var(--Card-padding)",
                          borderTop: "1px solid",
                          height: "60px",
                          background: "#b9b9c2",
                        }}
                      >
                        <Typography
                          startDecorator={
                            <DescriptionOutlinedIcon sx={{ color: "#000" }} />
                          }
                          sx={{
                            color: "#000", // qora matn rangi
                            fontWeight: 700,
                            fontFamily: "Poppins, sans-serif",
                            fontSize: "15px",
                            lineHeight: 1.4,
                            letterSpacing: "0.3px",
                          }}
                        >
                          {product.productDesc}
                        </Typography>
                      </CardOverflow>
                    </Card>
                  </CssVarsProvider>
                );
              })
            ) : (
              <Box className="no-data">New books are not aviable</Box>
            )}
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
