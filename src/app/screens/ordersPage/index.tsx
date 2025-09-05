import React, { useState, SyntheticEvent, useEffect } from "react";
import { Box, Container, Stack, Tabs, Tab, TextField } from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ProcessOrders from "./ProcessOrsders";
import PersonIcon from "@mui/icons-material/Person";
import "../../../css/order.css"; // CSS faylga ulanish
import FinishedOrders from "./FinishedOrders";
import PausedOrders from "./PausedOrders";

import { useDispatch } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { Order, OrderInquiry } from "../../../libs/types/order";
import { setFinishedOrders, setPausedOrders, setProcessOrders } from "./slice";
import { useGlobals } from "../../hooks/useGlobals";
import { OrderStatus } from "../../../libs/enums/order.enum";
import OrderService from "../../services/OrderService";
import { useHistory } from "react-router-dom";

// redux slice vs selector
const actionDispatch = (dispatch: Dispatch) => ({
  setPausedOrders: (data: Order[]) => dispatch(setPausedOrders(data)),
  setProcessOrders: (data: Order[]) => dispatch(setProcessOrders(data)),
  setFinishedOrders: (data: Order[]) => dispatch(setFinishedOrders(data)),
});
const OrdersPage = () => {
  const { setPausedOrders, setProcessOrders, setFinishedOrders } =
    actionDispatch(useDispatch());
  const { orderBuilder, authMember } = useGlobals();
  const history = useHistory();
  const [value, setValue] = useState("1");
  const [orderInquiry, setOrderInquiry] = useState<OrderInquiry>({
    page: 1,
    limit: 5,
    orderStatus: OrderStatus.PAUSE,
  });
  useEffect(() => {
    const order = new OrderService();
    order
      .getMyOrders({ ...orderInquiry, orderStatus: OrderStatus.PAUSE })
      .then((data) => setPausedOrders(data))
      .catch((err) => console.log(err));
    order
      .getMyOrders({ ...orderInquiry, orderStatus: OrderStatus.PROCESS })
      .then((data) => setProcessOrders(data))
      .catch((err) => console.log(err));
    order
      .getMyOrders({ ...orderInquiry, orderStatus: OrderStatus.FINISH })
      .then((data) => setFinishedOrders(data))
      .catch((err) => console.log(err));
  }, [orderInquiry, orderBuilder]);

  if (!authMember) history.push("/");

  //handler

  const handleChange = (e: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div className="order-page">
      <Container className="order-container">
        <Stack className="order-left">
          <TabContext value={value}>
            <Box className="order-nav-frame">
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                  className="table_list"
                >
                  <Tab
                    value="1"
                    label={
                      <span className="tab-label">
                        PAUSED
                        <br />
                        ORDERS
                      </span>
                    }
                  />

                  <Tab
                    value="2"
                    label={
                      <span className="tab-label">
                        PROCESS
                        <br />
                        ORDERS
                      </span>
                    }
                  />
                  <Tab
                    value="3"
                    label={
                      <span className="tab-label">
                        FINISHED
                        <br />
                        ORDERS
                      </span>
                    }
                  />
                </Tabs>
              </Box>

              <Stack className="order-main-content">
                <PausedOrders setValue={setValue} />
                <ProcessOrders setValue={setValue} />
                <FinishedOrders />
              </Stack>
            </Box>
          </TabContext>
        </Stack>

        {/* O'ng tomon - Foydalanuvchi va karta ma’lumoti */}
        <Stack className="order-right">
          <Box className="order-info-box">
            <Box className="member-box">
              <div className="order-user-img">
                <div className="order-user-img1">
                  <img
                    src="/img/img.jpeg"
                    className="order-user-avatar"
                    alt="User avatar"
                  />
                  <div className="order-user-icon-box">
                    <PersonIcon
                      sx={{
                        backgroundColor: "rgba(131, 118, 118, 0.5)",
                        color: "white",
                        borderRadius: "50%",
                      }}
                    />
                  </div>
                </div>
                <Box className="liner">
                  <span className="order-user-name">Senior Kyler </span> <br />
                  <span className="order-user-prof">USER</span>
                </Box>{" "}
                <hr className="horizantal" />
                <Box className="order-user-location">
                  <LocationOnIcon sx={{ marginTop: "10px" }} />
                  <p> South Korea, Jeonju</p>
                </Box>
              </div>

              {/* Card number  */}

              <Box className="card-box">
                <TextField className="card-input" placeholder="card-number" />

                <Box className="card-details">
                  <TextField
                    variant="outlined"
                    placeholder="07 / 24"
                    className="card-input"
                  />
                  <TextField
                    className="card-input"
                    variant="outlined"
                    placeholder="CVV: 010"
                  />
                </Box>

                <TextField
                  className="card-input"
                  variant="outlined"
                  placeholder="senior Kyler"
                />

                <Box className="payment-methods">
                  <img src="/img/gold.jpg" alt="Western Union" />
                  <img src="/img/card.jpg" alt="Mastercard" />
                  <img src="/img/goldi.jpg" alt="PayPal" />
                  <img src="/img/visae.jpg" alt="Visa" />
                </Box>
              </Box>
            </Box>
          </Box>
        </Stack>
      </Container>
    </div>
  );
};

export default OrdersPage;
