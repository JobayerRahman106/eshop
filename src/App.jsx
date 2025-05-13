import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./assets/pages/HomePage";
import ProductListPage from "./assets/pages/ProductListPage";
import ProductDetailsPage from "./assets/pages/ProductDetailsPage"
import BlogPage from "./assets/pages/BlogPage"
import CheckoutPage from "./assets/pages/CheckoutPage"
import ContactPage from "./assets/pages/ContactPage"

function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product-list" element={<ProductListPage/>} />
        <Route path="/product-details" element={<ProductDetailsPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  )
}

export default App
