import React from "react";
import { Box, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import TabPanel from "@mui/lab/TabPanel";
import moment from "moment";
import { createSelector } from "reselect";
import { retrieveProcessOrders } from "./selector";
import { useGlobals } from "../../hooks/useGlobals";
import { Order, OrderItem, OrderUpdateInput } from "../../../libs/types/order";
import { useSelector } from "react-redux";
import { Product } from "../../../libs/types/product";
import { Messages, serverApi } from "../../../libs/config";
import { T } from "../../../libs/types/common";
import OrderService from "../../services/OrderService";
import { sweetErrorHandling } from "../../../libs/sweetAlert";
import { OrderStatus } from "../../../libs/enums/order.enum";

const processOrdersRetriever = createSelector(
  retrieveProcessOrders,
  (processOrders) => ({
    processOrders,
  })
);

interface ProcessOrdersProps {
  setValue: (input: string) => void;
}

export default function ProcessOrders(props: ProcessOrdersProps) {
  const { setValue } = props;
  const { authMember, setOrderBuilder } = useGlobals();

  const { processOrders } = useSelector(processOrdersRetriever);

  const finishOrderHandler = async (e: T) => {
    try {
      if (!authMember) throw new Error(Messages.error2);
      //payment
      const orderId = e.target.value;
      const input: OrderUpdateInput = {
        orderId: orderId,
        orderStatus: OrderStatus.FINISH,
      };

      const confirmation = window.confirm("Have you received your order ?");
      if (confirmation) {
        const order = new OrderService();
        await order.updateOrder(input);
        setValue("3");
        setOrderBuilder(new Date());
      }
    } catch (err) {
      console.log(err);
      sweetErrorHandling(err).then();
    }
  };

  return (
    <TabPanel value="2">
      <Stack>
        {processOrders?.map((order: Order) => {
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
                          {" "}
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
                      style={{ marginLeft: "20px" }}
                      alt="Plus icon"
                    />
                    <p>Delivery cost</p>
                    <p>${order.orderDelivery}</p>
                    <img
                      src={"/icons/pause.svg"}
                      style={{ marginLeft: "20px" }}
                      alt="Pause icon"
                    />
                    <p>Total</p>
                    <p>${order.orderTotal}</p>
                  </div>

                  <p className="data-compl">
                    {moment().format("YY-MM-DD HH:mm")}
                  </p>

                  <Button
                    value={order._id}
                    variant="contained"
                    color="primary"
                    className="verify-button3"
                    onClick={finishOrderHandler}
                  >
                    VERIFY
                  </Button>
                </Box>
              </Box>
            </Box>
          );
        })}

        {/* Ma'lumot yo'q bo‘lsa */}
        {!processOrders ||
          (processOrders.length === 0 && (
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
