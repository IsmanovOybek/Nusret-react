import { Box, Button, Container, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";

export function HomeNavbar() {
  const authMember = true;
  return (
    <div className="home-navbar">
      <Container sx={{ mt: "55px", height: "642px" }}>
        <Stack
          sx={{ height: "50px" }}
          flexDirection={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Box>
            <NavLink to="/">
              <img
                style={{ width: "125px", height: "30px", borderRadius: "20px" }}
                src="/icons/banner_ici.webp"
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
            {/**vBasket */}

            {!authMember ? (
              <Box>
                <Button
                  variant="contained"
                  style={{ background: "#3776CC", color: "#f8f8ff" }}
                >
                  login
                </Button>
              </Box>
            ) : (
              <img />
            )}
          </Stack>
        </Stack>
        {/* <Stack>NUSRET</Stack> */}
      </Container>
    </div>
  );
}
