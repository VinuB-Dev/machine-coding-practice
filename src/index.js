import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { DataProvider } from "./Context/dataContext";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <DataProvider>
      <App />
    </DataProvider>
  </StrictMode>,
  rootElement
);
