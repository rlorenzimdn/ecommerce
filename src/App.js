import { BrowserRouter } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import CartProvider from "./context/CartContext";
// import Home from "./pages/Home";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        {/* <Routes> */}
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/productos" element={<h1>Productos</h1>} /> */}
        {/* <Route path="*" element={<h1>ERROR 404 - No encontrada</h1>} /> */}
        {/* </Routes> */}
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
