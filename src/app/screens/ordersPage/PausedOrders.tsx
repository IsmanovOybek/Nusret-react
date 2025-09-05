import React from "react";
import { Box, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import TabPanel from "@mui/lab/TabPanel";
import moment from "moment";
import { createSelector } from "reselect";
import { retrievePausedOrders } from "./selector";
import { useSelector } from "react-redux";
import { useGlobals } from "../../hooks/useGlobals";
import { Order, OrderItem, OrderUpdateInput } from "../../../libs/types/order";
import { Product } from "../../../libs/types/product";
import { Messages, serverApi } from "../../../libs/config";
import { OrderStatus } from "../../../libs/enums/order.enum";
import { T } from "../../../libs/types/common";
import OrderService from "../../services/OrderService";
import { sweetErrorHandling } from "../../../libs/sweetAlert";

const pausedOrdersRetriever = createSelector(
  retrievePausedOrders,
  (pausedOrders) => ({
    pausedOrders,
  })
);
interface PausedOrdersProps {
  setValue: (input: string) => void;
}

export default function PausedOrders(props: PausedOrdersProps) {
  const { setValue } = props;
  const { pausedOrders } = useSelector(pausedOrdersRetriever);
  const { authMember, setOrderBuilder } = useGlobals();

  // handler
  const deleteOrderHandler = async (e: T) => {
    try {
      if (!authMember) throw new Error(Messages.error2);
      const orderId = e.target.value;
      const input: OrderUpdateInput = {
        orderId: orderId,
        orderStatus: OrderStatus.DELETE,
      };

      const confirmation = window.confirm("Do you want to delete the order?");
      if (confirmation) {
        const order = new OrderService();
        await order.updateOrder(input);
        setOrderBuilder(new Date());
      }
    } catch (err) {
      console.log(err);
      sweetErrorHandling(err).then();
    }
  };
  const processOrderHandler = async (e: T) => {
    try {
      if (!authMember) throw new Error(Messages.error2);
      //payment
      const orderId = e.target.value;
      const input: OrderUpdateInput = {
        orderId: orderId,
        orderStatus: OrderStatus.PROCESS,
      };

      const confirmation = window.confirm(
        "Do you want to process with payment?"
      );
      if (confirmation) {
        const order = new OrderService();
        await order.updateOrder(input);
        setValue("2");
        setOrderBuilder(new Date());
      }
    } catch (err) {
      console.log(err);
      sweetErrorHandling(err).then();
    }
  };

  return (
    <TabPanel value="1">
      <Stack>
        {pausedOrders?.map((order: Order) => {
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
                        alt="Dish image"
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

                <Box className="product-price">
                  <div className="products">
                    <p>Product price</p>
                    <p>${order.orderTotal - order.orderDelivery}</p>
                    <img
                      src={"/icons/plus.svg"}
                      style={{ marginRight: "10px" }}
                      alt="Plus icon"
                    />
                    <p>Delivery cost</p>
                    <p>${order.orderDelivery}</p>
                    <img
                      src={"/icons/pause.svg"}
                      style={{ marginRight: "10px" }}
                      alt="Pause icon"
                    />
                    <p>Total</p>
                    <p>${order.orderTotal}</p>
                  </div>

                  <Button
                    value={order._id}
                    variant="contained"
                    color="secondary"
                    className="verify-button1"
                    onClick={deleteOrderHandler}
                  >
                    CANCEL
                  </Button>
                  <Button
                    value={order._id}
                    variant="contained"
                    color="primary"
                    className="verify-button"
                    onClick={processOrderHandler}
                  >
                    PAYMENT
                  </Button>
                </Box>

                {/* <p className="data-compl">
                  {moment().format("YY-MM-DD HH:mm")}
                </p> */}
              </Box>
            </Box>
          );
        })}

        {/* Ma'lumot yo'q bo‘lsa */}
        {!pausedOrders ||
          (pausedOrders.length === 0 && (
            <Box display="flex" flexDirection="row" justifyContent="center">
              <img
                src={"/icons/noimage-list.svg"}
                style={{ width: 300, height: 300 }}
                alt="No orders available"
              />
            </Box>
          ))}
      </Stack>
    </TabPanel>
  );
}
