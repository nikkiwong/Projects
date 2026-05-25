
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from "./pages/Home";
import Checkout from "./pages/Checkout"
import Auth from "./pages/Auth";
import Navbar from "./components/Navbar";
import AuthProvider from './context/AuthContext'
import ProductDetails from './pages/ProductDetails'
import CartProvider from './context/CartContext'

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <div className='app'>

          <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/checkout" elemenst={<Checkout />} />
            <Route path="/products/:id" element={<ProductDetails />} />
          </Routes>

        </div>
      </CartProvider>
    </AuthProvider>
  )
}

export default App
