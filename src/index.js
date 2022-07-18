import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ProductsProvider } from "contexts/product-context";
import { AuthProvider } from "contexts/authContext";
import { BrowserRouter } from "react-router-dom";

import { makeServer } from "./server";

makeServer();

ReactDOM.render(
  <React.StrictMode>
    <ProductsProvider>
      <BrowserRouter>
        <AuthProvider>
          <App />
        </AuthProvider>
      </BrowserRouter>
    </ProductsProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
