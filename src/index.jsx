import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ShoppingCardProvider from "./context/shoppingCardContext";
import SelectedProvider from "./context/selecterd";
import CartOpenProvider from "./context/cartOpen";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ShoppingCardProvider>
        <SelectedProvider>
          <CartOpenProvider>
            <App />
          </CartOpenProvider>
        </SelectedProvider>
      </ShoppingCardProvider>
    </BrowserRouter>
  </React.StrictMode>
);
