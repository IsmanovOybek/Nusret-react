import { Box, Button, Container, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";
import Basket from "./Basket";

export function HomeNavbar() {
  const authMember = true;
  return (
    <div className="home-navbar">
      <Container sx={{ mt: "55px", height: "642px" }}>
        <Stack
          sx={{ height: "50px" }}
          flexDirection={"row"}
          justifyContent={"start"}
          alignItems={"center"}
        >
          <Box>
            <NavLink to="/">
              <img
                style={{
                  width: "150px",
                  height: "38px",
                  borderRadius: "5px 0px 0px 5px",
                  marginTop: "7px",
                }}
                src="/icons/bannerr.webp"
              />
            </NavLink>
          </Box>

          <Stack className="hover-liner">
            <Box className={"hover-line"}>
              <NavLink to="/" activeClassName={"underline"}>
                Home
              </NavLink>
            </Box>
            <Box className={"hover-line"}>
              <NavLink to="/products" activeClassName={"underline"}>
                Products
              </NavLink>
            </Box>
            {authMember ? (
              <Box className={"hover-line"}>
                <NavLink to="/orders" activeClassName={"underline"}>
                  Orders
                </NavLink>
              </Box>
            ) : null}
            {authMember ? (
              <Box className={"hover-line"}>
                <NavLink to="/member-page" activeClassName={"underline"}>
                  My Page
                </NavLink>
              </Box>
            ) : null}
            <Box className={"hover-line"}>
              <NavLink to="/help" activeClassName={"underline"}>
                Help
              </NavLink>
            </Box>
            <Basket/> 

            {!authMember ? (
              <Box>
                <Button variant="contained" className="login-button">
                  login
                </Button>
              </Box>
            ) : (
              <img
                src={"/icons/default-user.svg"}
                aria-haspopup={"true"}
                width={"40px"}
                height={"40px"}
              />
            )}
          </Stack>
        </Stack>
        <Stack className={"header-frame"}>
          <Stack className={"detail"}>
            <Box className={"head-main-txt"}>A book is a priceless bridge</Box>
            <Box className={"wel-txt"}>
              that connects the past and the future
            </Box>
            <Box className={"service-txt"}>opening a path to human thought</Box>
            <Box className={"signup"}>
              {!authMember ? (
                <Button variant={"contained"} className={"signup-button"}>
                  sign up
                </Button>
              ) : null}
            </Box>
          </Stack>
          <Box className={"logo-frame"}>
            <div className={"logo-img"}></div>
          </Box>
        </Stack>
      </Container>
    </div>
  );
}
