import { useState } from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header';
import Products from './components/Products';

function App() {
  const [showCart, setShowCart] = useState(false)
  const showCartHandler = () => {
    setCartIsShown(true);
  }
  return (
    <>
    <main className='max-w-7xl mx-auto'>
    <Navbar onClick={showCartHandler}/>
    <Header />
    <Products />
    </main>

    </>
  )
}

export default App
