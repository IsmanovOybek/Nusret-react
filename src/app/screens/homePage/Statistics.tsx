import React from "react";
import { Box, Container, Stack } from "@mui/material";
import Divider from "../../components/divider";

export default function Statistics() {
  return (
    <div className={"static-frame"}>
      <Container>
        <Stack className="info">
          <Stack className="static-box">
            <Box className="static-num">100+</Box>
            <Box className="static-text">Libruarys</Box>
          </Stack>

          <Divider height="64" width="2" bg="#E3C08D" />

          <Stack className="static-box">
            <Box className="static-num">8K</Box>
            <Box className="static-text">Books</Box>
          </Stack>

          <Divider height="64" width="2" bg="#E3C08D" />

          <Stack className="static-box">
            <Box className="static-num">50+</Box>
            <Box className="static-text">Translation into Uzbek</Box>
          </Stack>

          <Divider height="64" width="2" bg="#E3C08D" />

          <Stack className="static-box">
            <Box className="static-num">200K+</Box>
            <Box className="static-text">Clients</Box>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
