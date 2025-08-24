import React from "react";
import { Box, Stack } from "@mui/material";
import TabPanel from "@mui/lab/TabPanel";

export default function FinishedOrders() {
  return (
    <TabPanel value="3">
      <Stack>
        {[1, 2].map((ele, index) => {
          return (
            <Box key={index} className="order-main-box">
              <Box className="order-box-scroll">
                {[1, 2, 3].map((ele2, index2) => {
                  return (
                    <Box key={index2} className="orders-name-price">
                      <img
                        src={"/img/men.webp"}
                        className="order-dish-img"
                        alt="Finished dish"
                      />
                      <p className="title-dish">Men</p>
                      <Box className="price-box">
                        <p>$12</p>
                        <img src={"/icons/close.svg"} alt="Close icon" />
                        <p>2</p>
                        <img src={"/icons/pause.svg"} alt="Pause icon" />
                        <p style={{ marginLeft: "15px" }}>$24</p>
                      </Box>
                    </Box>
                  );
                })}
                <Box className="product_price">
                  <p>Product price</p>
                  <p>$24</p>
                 
                  <p>Delivery cost</p>
                  <p>$2</p>
                   
                  <p>Total</p>
                  <p>$48</p>
                </Box>
              </Box>
            </Box>
          );
        })}

        {/* Agar data yo‘q bo‘lsa, quyidagisi ko‘rsatiladi */}
        {false && (
          <Box display={"flex"} flexDirection={"row"} justifyContent={"center"}>
            <img
              src={"/icons/noimage-list.svg"}
              style={{ width: 300, height: 300 }}
              alt="No data"
            />
          </Box>
        )}
      </Stack>
    </TabPanel>
  );
}
