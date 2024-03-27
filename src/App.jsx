import { useState } from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header';
import Products from './components/Products';
import Cart from './components/Cart';
import CartProvider from './store/CartProvider';

function App() {
  const [showCart, setShowCart] = useState(false)
  const showCartHandler = () => {
    setShowCart(true);
  }
  const hideCartHandler = () => {
    setShowCart(false);
  }
  return (
    
    <CartProvider className='max-w-7xl mx-auto'>
    {showCart && <Cart onClose={hideCartHandler}/>}
    <Navbar onClick={showCartHandler}/>
    <main>
    <Header />
    <Products />
    </main>
    
    </CartProvider>

  
  )
}

export default App
