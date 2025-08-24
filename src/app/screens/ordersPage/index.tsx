import React, { useState, SyntheticEvent } from "react";
import { Box, Container, Stack, Tabs, Tab, TextField } from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ProcessOrders from "./ProcessOrsders";
import PersonIcon from '@mui/icons-material/Person';
import "../../../css/order.css"// CSS faylga ulanish
import FinishedOrders from "./FinishedOrders";
import PausedOrders from "./PausedOrders";

const OrdersPage = () => {
  const [value, setValue] = useState("1");

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
                      PAUSED<br />
                      ORDERS
                    </span>
                  }
                />

                     
                <Tab
                  value="2"
                  label={
                    <span className="tab-label">
                      PROCESS<br />
                      ORDERS
                    </span>
                  }
                />
                  <Tab
                  value="3"
                  label={
                    <span className="tab-label">
                      FINISHED<br />
                      ORDERS
                    </span>
                  }
                />
                </Tabs>
              </Box>

              <Stack className="order-main-content">
                <PausedOrders />
                <ProcessOrders />
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
                <PersonIcon sx={{backgroundColor: "rgba(131, 118, 118, 0.5)",color:"white",borderRadius: "50%"}}/>
                </div>
              </div>
              <Box className="liner">
                <span className="order-user-name">Senior Kyler </span> <br/>
                <span className="order-user-prof">USER</span>
              </Box> <hr className="horizantal"/>
              <Box className="order-user-location">
               
                <LocationOnIcon  sx={{marginTop: "10px"}}/>
                <p> South Korea, Jeonju</p>
              </Box>
             </div>


             {/* Card number  */}

             <Box className="card-box">
              <TextField  className="card-input"
                placeholder="card-number"
              
              />

              <Box className="card-details">
                <TextField
                  variant="outlined"
                  placeholder="07 / 24"
                
                  className="card-input"
                />
                <TextField className="card-input"
                  variant="outlined"
                   placeholder="CVV: 010"
                />
              </Box>

              <TextField className="card-input"
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
            