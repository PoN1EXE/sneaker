import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HeaderBar } from './components/HeaderBar'
import { Home } from './components/pages/Home'
import { Liked } from './components/pages/Liked'
import { User } from './components/pages/User'
import './index.scss'
import type { Sneaker } from './components/SneakerList'

type CartItem = Sneaker & { cartId: string }

export const App = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [orders, setOrders] = useState<Sneaker[]>([])
  const [liked, setLiked] = useState<Sneaker[]>([])
  const [modalBarIsOpen, setModalBarIsOpen] = useState(false)
  const [isOrdered, setIsOrdered] = useState(false)

  const handleAddToCart = (sneaker: Sneaker) => {
    if (!cartItems.some((item) => item.id === sneaker.id)) {
      setCartItems((prev) => [...prev, { ...sneaker, cartId: `cart-${Date.now()}` }])
    }
  }

  const handleRemoveFromCartBySneakerId = (sneakerId: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== sneakerId))
  }

  const handleRemoveFromCartByCartId = (cartId: string) => {
    setCartItems((prev) => prev.filter((item) => item.cartId !== cartId))
  }

  const openModal = () => setModalBarIsOpen(true)
  const closeModal = () => {
    setModalBarIsOpen(false)
    setIsOrdered(false)
  }

  const handleCheckout = () => {
    setOrders((prev) => [...prev, ...cartItems])
    setCartItems([])
    setIsOrdered(true)
  }

  const handleLike = (sneaker: Sneaker) => {
    setLiked((prev) =>
      prev.some((item) => item.id === sneaker.id) ? prev.filter((item) => item.id !== sneaker.id) : [...prev, sneaker]
    )
  }

  return (
    <div className='wrapper'>
      <Router>
        <HeaderBar
          cartItems={cartItems}
          isOrdered={isOrdered}
          modalBarIsOpen={modalBarIsOpen}
          onOpenModal={openModal}
          onCloseModal={closeModal}
          onRemoveFromCart={handleRemoveFromCartByCartId}
          onCheckout={handleCheckout}
        />
        <main className='content'>
          <Routes>
            <Route
              path='/'
              element={
                <Home
                  cartItems={cartItems}
                  liked={liked}
                  onAddToCart={handleAddToCart}
                  onRemoveFromCart={handleRemoveFromCartBySneakerId}
                  onLike={handleLike}
                />
              }
            />
            <Route path='/liked' element={<Liked liked={liked} />} />
            <Route path='/user' element={<User orders={orders} />} />
          </Routes>
        </main>
      </Router>
    </div>
  )
}
