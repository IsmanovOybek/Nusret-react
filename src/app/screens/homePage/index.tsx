import { Container } from "@mui/material";
import NewBooks from "./NewBooks";
import "../../../css/home.css";
import Statistics from "./Statistics";

export default function HomePage() {
  return (
    <div className={"homepage"}>
      <NewBooks />
      <Statistics />
    </div>
  );
}
