import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "../src/css/index.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./MaterialTheme";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter as Router } from "react-router-dom";
import CursorFollower from "./app/cursor";
import ContextProvider from "./app/context/ContextProvider";
import { Socket } from "dgram";
import { SocketProvider } from "./app/context/SocketContext";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ContextProvider>
        <SocketProvider>
        {" "}
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Router>
            <CursorFollower>
              {" "}
              <App />
            </CursorFollower>
          </Router>
        </ThemeProvider>
        </SocketProvider>
      </ContextProvider>
    </Provider>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
