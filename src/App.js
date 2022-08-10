import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartProvider from "./context/CartContext";
import "./App.scss";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home";
import Books from "./pages/Books";
import Topics from "./pages/Topics";
import Authors from "./pages/Authors";
import Contact from "./pages/Contact";
import Checkout from "./pages/Checkout";
import Detail from "./pages/Detail";

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
          <Route path="/Products/:id" element={<Detail />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
