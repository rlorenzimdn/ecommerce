import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartProvider from "./components/Context/CartContext";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home";
import Books from "./pages/Books";
import Topics from "./pages/Topics";
import Authors from "./pages/Authors";
import Contact from "./pages/Contact";
import Detail from "./pages/Detail";
import CartShopping from "./pages/CartShopping";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/topics" element={<Topics />} />
          <Route path="/authors" element={<Authors />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/item/:id" element={<Detail />} />
          <Route path="/cart" element={<CartShopping />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
