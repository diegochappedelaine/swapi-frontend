import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "core/theme";
import AppContext from "provider/AppProvider";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AppContext>
        <ChakraProvider theme={theme}>
          <App />
        </ChakraProvider>
      </AppContext>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
