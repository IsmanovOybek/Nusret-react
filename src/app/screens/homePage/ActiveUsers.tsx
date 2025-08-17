import { Box, Container, Stack } from "@mui/material";
import Card from "@mui/joy/Card";
import { CardOverflow, CssVarsProvider, Typography } from "@mui/joy";
import Divider from "../../components/divider";
import AspectRatio from "@mui/joy/AspectRatio";

const activeUsers = [
  { memberNick: "Martin", memberImage: "/img/martin.webp" },
  { memberNick: "Shawm", memberImage: "/img/Sherxon.webp" },
  { memberNick: "Jay", memberImage: "/img/Jay.webp" },
  { memberNick: "Yohan", memberImage: "/img/Yohan.webp" },
];

export default function ActiveUsers() {
  return (
    <div className={"active-users-frame"}>
      <Container>
        <Stack className="main">
          <Box className="category-title">Reader Rankings</Box>

          <CssVarsProvider>
            <Stack className="cards-frame">
              {activeUsers.length !== 0 ? (
                activeUsers.map((ele, index) => {
                  return (
                    <Card variant="outlined" className="card" key={index}>
                      <CardOverflow>
                        <AspectRatio ratio="1">
                          <img src={ele.memberImage} alt={ele.memberNick} />
                        </AspectRatio>
                        
                      </CardOverflow>
                      <CardOverflow variant="soft" className="member-nickname">
                        <Typography>{ele.memberNick}<span className="numberof">50+</span></Typography>
                      </CardOverflow>
                      <Stack>
                        <Divider />
                      </Stack>
                    </Card>
                  );
                })
              ) : (
                <Box className="no-data">Active Users!</Box>
              )}
            </Stack>
          </CssVarsProvider>
        </Stack>
      </Container>
    </div>
  );
}
