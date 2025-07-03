import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HeaderBar } from './components/HeaderBar'
import { Home } from './components/pages/Home'
import { Liked } from './components/pages/Liked'
import { User } from './components/pages/User'
import './index.scss'
import { useShopState } from './components/hooks/useShopState'

export const App = () => {
  const {
    cartItems,
    orders,
    liked,
    modalBarIsOpen,
    isOrdered,
    handleAddToCart,
    handleRemoveFromCartBySneakerId,
    handleRemoveFromCartByCartId,
    openModal,
    closeModal,
    handleCheckout,
    handleLike,
  } = useShopState()
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
            <Route
              path='/liked'
              element={
                <Liked
                  liked={liked}
                  isAdded={(id) => cartItems.some((item) => item.id === id)}
                  onAddToCart={handleAddToCart}
                  onRemoveFromCart={handleRemoveFromCartBySneakerId}
                />
              }
            />
            <Route path='/user' element={<User orders={orders} />} />
          </Routes>
        </main>
      </Router>
    </div>
  )
}
