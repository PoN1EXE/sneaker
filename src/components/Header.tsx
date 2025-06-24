import './../index.scss'
import { useState } from 'react'
import { sneakers, type Sneaker } from './SneakerList'
import { SneakerCard } from './SneakerCard'
import { ModalBar } from './ModalBar'
import { CartButton } from './custom/CartButton'

type CartItem = Sneaker & { cartId: string }

export const Header = () => {
  const [modalBarIsOpen, setModalBarIsOpen] = useState(false)
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [cartCounter, setCartCounter] = useState(0)

  const openModal = () => setModalBarIsOpen(true)
  const closeModal = () => setModalBarIsOpen(false)

  const handleAddToCart = (sneaker: Sneaker) => {
    const newId = `cart-${cartCounter}`
    setCartCounter((prev) => prev + 1)
    setCartItems((prev) => [...prev, { ...sneaker, cartId: newId }])
  }
  const handleRemoveFromCart = (cartId: string) => {
    setCartItems((prev) => prev.filter((item) => item.cartId !== cartId))
  }
  return (
    <div className='wrapper'>
      <header>
        <div className='headerLeft'>
          <img src='/img/HeaderLogo.svg' className='img' />
          <div className='headerInfo'>
            <h3>REACT SNEAKER</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className='headerRight'>
          <li>
            <CartButton onClick={openModal} />
          </li>
          <li>
            <img src='/img/liked.svg' className='liked' />
            <span>Закладки </span>
          </li>
          <li>
            <img src='/img/user.svg' className='user' />
          </li>
        </ul>
      </header>

      <ModalBar
        isOpen={modalBarIsOpen}
        onClose={closeModal}
        cartItems={cartItems}
        onRemoveFromCart={handleRemoveFromCart}
      />

      <div>
        <img src='/img/frog.png' className='bigPic' />
      </div>
      <div className='content'>
        <div
          style={{
            marginLeft: '30px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <h1 style={{ marginLeft: '30px' }}>Все кроссовки</h1>
          <input
            type='text'
            className='search-input'
            placeholder='Поиск...'
            style={{
              backgroundImage: 'url(/img/search.svg)',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: '10px center',
              paddingLeft: '40px',
              backgroundColor: '#ccc',
            }}></input>
        </div>
        <div className='card-list'>
          {sneakers.map((sneaker) => {
            const cartItem = cartItems.find((item) => item.id === sneaker.id)
            return (
              <SneakerCard
                key={sneaker.id}
                sneaker={{ ...sneaker, cartId: cartItem?.cartId }}
                onAddToCart={handleAddToCart}
                onRemoveFromCart={handleRemoveFromCart}
                isAdded={!!cartItem}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
