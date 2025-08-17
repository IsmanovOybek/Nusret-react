import { Container } from "@mui/material";
import "../../../css/home.css";
import NewBooks from "./NewBooks";
import Statistics from "./Statistics";
import PopularBooks from "./PopularBooks";

export default function HomePage() {
  return (
    <div className={"homepage"}>
      <NewBooks />
      <Statistics />
      <PopularBooks />
    </div>
  );
}
