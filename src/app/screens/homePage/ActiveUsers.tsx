import { Box, Container, Stack } from "@mui/material";
import Card from "@mui/joy/Card";
import { CssVarsProvider, Typography } from "@mui/joy";

import { createSelector } from "reselect";
import { retrievereaderRankings } from "./selector";
import { useSelector } from "react-redux";
import { Product } from "../../../libs/types/product";
import { serverApi } from "../../../libs/config";
import { ProductCollection } from "../../../libs/enums/product.enum";
import { Member } from "../../../libs/types/member";

const readerRankingsRetriever = createSelector(
  retrievereaderRankings,
  (readerRankings) => ({
    readerRankings,
  })
);

export default function ActiveUsers() {
  const { readerRankings } = useSelector(readerRankingsRetriever);
  return (
    <div className={"active-users-frame"}>
      <Container>
        <Stack className="main">
          <Box className="category-title">Reader Rankings</Box>

          <CssVarsProvider>
            <Stack className="cards-frame">
              {readerRankings.length !== 0 ? (
                readerRankings.map((member: Member) => {
                  const imagePath = `${serverApi}/${member.memberImage}`;
                  return (
                    <Card variant="outlined" className="card" key={member._id}>
                      <img src={imagePath} alt={member.memberNick} />
                      <Box className="member-nickname">
                        <Typography className="member-name">
                          {member.memberNick}
                        </Typography>
                      </Box>
                    </Card>
                  );
                })
              ) : (
                <Box className="no-data">Reader Rankings!</Box>
              )}
            </Stack>
          </CssVarsProvider>
        </Stack>
      </Container>
    </div>
  );
}
