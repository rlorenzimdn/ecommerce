import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartProvider from "./context/CartContext";
import "./App.scss";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home";
import Books from "./pages/Books";
import Topics from "./pages/Topics";
import Authors from "./pages/Authors";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

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
          <Route path="/item/:itemid" element={<ItemDetailContainer />} />  
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
