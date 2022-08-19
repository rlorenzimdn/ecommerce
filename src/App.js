import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartProvider from "./Context/CartContext";
import "./App.scss";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home";
import Books from "./pages/Books";
import Topics from "./pages/Topics";
import Authors from "./pages/Authors";
import Contact from "./pages/Contact";
<<<<<<< HEAD
// import Checkout from "./pages/Checkout";
import Detail from "./pages/Detail";
=======
>>>>>>> 1a7ef143149980a064b9dbbca48d8e842ff28e9b
import Cart from "./pages/Cart";
// import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

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
<<<<<<< HEAD
          <Route path="/item/:id" element={<Detail />} />
=======
          <Route path="/item/:itemid" element={<ItemDetailContainer />} />  
>>>>>>> 1a7ef143149980a064b9dbbca48d8e842ff28e9b
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
