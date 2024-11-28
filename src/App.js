import React from "react";
import { useState, useEffect } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import { fetchProduct } from "./Api";
import ProductDettail from "./Pages/ProductDettail";
import Blog from "./Pages/Blog";
import Login from "./Pages/Login";

function App() {
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   fetchProduct().then((res) => setProducts(res));
  // }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/index.html" element={<Home />} />
          <Route path="/category.html" element={<Shop />} />
          <Route path="/single-product.html" element={<ProductDettail />} />
          <Route path="/blog.html" element={<Blog />} />
          <Route path="/login.html" element={<Login />} />

          {/* <Route path="/about" element={<About />} />
        <Route path="/service" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} /> */}
        </Routes>
      </BrowserRouter>
      {/* <section className="mx-auto grid grid-cols-1 md:grid-cols-5 gap-4">
        {products.map((pro) => (
          <Home key={pro.id} product={pro} />
        ))}
      </section> */}
    </>
  );
}

export default App;
