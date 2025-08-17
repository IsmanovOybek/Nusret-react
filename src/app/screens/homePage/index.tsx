import { Container } from "@mui/material";
import "../../../css/home.css";
import NewBooks from "./NewBooks";
import Statistics from "./Statistics";
import PopularBooks from "./PopularBooks";
import Advertisement from "./Advertisement";
import ActiveUsers from "./ActiveUsers";

export default function HomePage() {
  return (
    <div className={"homepage"}>
      <NewBooks />
      <Statistics />
      <PopularBooks />
      <Advertisement />
      <ActiveUsers />
    </div>
  );
}
