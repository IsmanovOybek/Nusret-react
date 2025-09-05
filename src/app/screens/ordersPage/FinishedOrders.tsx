import React from "react";
import { Box, Stack } from "@mui/material";
import TabPanel from "@mui/lab/TabPanel";

import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { retrieveFinishedOrders } from "./selector";
import { Order, OrderItem } from "../../../libs/types/order";
import { Product } from "../../../libs/types/product";
import { serverApi } from "../../../libs/config";

const finishedOrdersRetriever = createSelector(
  retrieveFinishedOrders,
  (finishedOrders) => ({
    finishedOrders,
  })
);

export default function FinishedOrders() {
  const { finishedOrders } = useSelector(finishedOrdersRetriever);
  return (
    <TabPanel value="3">
      <Stack>
        {finishedOrders?.map((order: Order) => {
          return (
            <Box key={order._id} className="order-main-box">
              <Box className="order-box-scroll">
                {order?.orderItems?.map((item: OrderItem) => {
                  const product: Product = order?.productData?.filter(
                    (ele: Product) => item.productId === ele._id
                  )[0];
                  if (!product) return null;
                  const imagePath = `${serverApi}/${product.productImages[0]}`;
                  return (
                    <Box key={item._id} className="orders-name-price">
                      <img
                        src={imagePath}
                        className="order-dish-img"
                        alt="Finished dish"
                      />
                      <p className="title-dish">{product.productName}</p>
                      <Box className="price-box">
                        <p>${item.itemPrice}</p>
                        <img src={"/icons/close.svg"} alt="Close icon" />
                        <p> {item.itemQuantity}</p>
                        <img src={"/icons/pause.svg"} alt="Pause icon" />
                        <p style={{ marginLeft: "15px" }}>
                          ${item.itemQuantity * item.itemPrice}
                        </p>
                      </Box>
                    </Box>
                  );
                })}
                <Box className="product_price">
                  <p>Product price</p>
                  <p>${order.orderTotal - order.orderDelivery}</p>

                  <p>Delivery cost</p>
                  <p>${order.orderDelivery}</p>

                  <p>Total</p>
                  <p>${order.orderTotal}</p>
                </Box>
              </Box>
            </Box>
          );
        })}

        {/* Agar data yo‘q bo‘lsa, quyidagisi ko‘rsatiladi */}
        {!finishedOrders ||
          (finishedOrders.length === 0 && (
            <Box
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"center"}
            >
              <img
                src={"/icons/noimage-list.svg"}
                style={{ width: 300, height: 300 }}
                alt="No data"
              />
            </Box>
          ))}
      </Stack>
    </TabPanel>
  );
}
