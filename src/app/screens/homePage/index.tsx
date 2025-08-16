import { Container } from "@mui/material";
import NewBooks from "./NewBooks";
import "../../../css/home.css";

export default function HomePage() {
  return (
    <div className={"homepage"}>
      <NewBooks />
    </div>
  );
}
