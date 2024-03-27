import { useState } from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header';
import Products from './components/Products';
import Cart from './components/Cart';

function App() {
  const [showCart, setShowCart] = useState(false)
  const showCartHandler = () => {
    setShowCart(true);
  }
  const hideCartHandler = () => {
    setShowCart(false);
  }
  return (
    <>
    <main className='max-w-7xl mx-auto'>
    {showCart && <Cart onClose={hideCartHandler}/>}
    <Navbar onClick={showCartHandler}/>
    <Header />
    <Products />
    </main>

    </>
  )
}

export default App
