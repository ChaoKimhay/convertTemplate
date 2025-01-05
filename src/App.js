import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PayPalScriptProvider } from "@paypal/react-paypal-js"; // Import PayPal provider
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import ProductDetail from "./Pages/ProductDettail"; // Note: Ensure correct spelling for this component
import Blog from "./Pages/Blog";
import Login from "./Pages/Login";

function App() {
  // PayPal provider options
  const initialOptions = {
    "client-id":
      "AXd64BWTA-L56YhOy5N1Aow_1HJaf-rd_m5dVr0Tw6Jk6uDahk-fS_EjLJjm1LIWbZhNitP2SNQtUTuz", // Replace with your PayPal Client ID
    currency: "USD",
  };

  return (
    <PayPalScriptProvider options={initialOptions}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/index.html" element={<Home />} />
          <Route path="/category.html" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/blog.html" element={<Blog />} />
          <Route path="/login.html" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </PayPalScriptProvider>
  );
}

export default App;
