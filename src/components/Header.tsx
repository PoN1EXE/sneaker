import './../index.scss'
import { useState } from 'react'
import { sneakers, type Sneaker } from './SneakerList'
import { SneakerCard } from './SneakerCard'
import { ModalBar } from './ModalBar'
import { CartButton } from './custom/CartButton'
import { LikeButton } from './custom/LikeButton'
import { UserButton } from './custom/UserButton'

type CartItem = Sneaker & { cartId: string }

export const Header = () => {
  const [modalBarIsOpen, setModalBarIsOpen] = useState(false)
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [orders, setOrders] = useState<Sneaker[]>([])
  const [liked, setLiked] = useState<Sneaker[]>([])
  const [cartCounter, setCartCounter] = useState(0)
  const [activeTab, setActiveTab] = useState('main')
  const [input, setInput] = useState('')
  const [isOrdered, setIsOrdered] = useState(false)

  const openLikes = () => setActiveTab('likes')
  const openUser = () => setActiveTab('user')
  const goHome = () => setActiveTab('main')

  const openModal = () => setModalBarIsOpen(true)
  const closeModal = () => {
    setModalBarIsOpen(false)
    setIsOrdered(false)
  }

  const filtered = sneakers.filter((sneaker) => sneaker.title.toLowerCase().includes(input.toLowerCase()))

  const handleAddToCart = (sneaker: Sneaker) => {
    const newId = `cart-${cartCounter}`
    setCartCounter((prev) => prev + 1)
    setCartItems((prev) => [...prev, { ...sneaker, cartId: newId }])
  }
  const handleRemoveFromCart = (cartId: string) => {
    setCartItems((prev) => prev.filter((item) => item.cartId !== cartId))
  }

  const handleCheckout = () => {
    setOrders([...orders, ...cartItems])
    setCartItems([])
    setIsOrdered(true)
  }

  const handleLike = (sneaker: Sneaker) => {
    const isLiked = liked.some((item) => item.id === sneaker.id)
    if (isLiked) {
      setLiked((prev) => prev.filter((item) => item.id !== sneaker.id))
    } else {
      setLiked((prev) => [...prev, sneaker])
    }
  }

  return (
    <div className='wrapper'>
      <header>
        <div className='headerLeft' onClick={goHome} style={{ cursor: 'pointer' }}>
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
            <LikeButton onClick={openLikes} />
          </li>
          <li>
            <UserButton onClick={openUser} />
          </li>
        </ul>
      </header>

      <ModalBar
        isOpen={modalBarIsOpen}
        onClose={closeModal}
        cartItems={cartItems}
        onRemoveFromCart={handleRemoveFromCart}
        onCheckout={handleCheckout}
        isOrdered={isOrdered}
      />
      {activeTab === 'main' && (
        <>
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
                value={input}
                onChange={(e) => setInput(e.target.value)}
                type='text'
                className='search-input'
                placeholder='Поиск...'
                style={{
                  backgroundImage: 'url(/img/search.svg)',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: '10px center',
                  paddingLeft: '40px',
                  backgroundColor: '#ccc',
                }}
              />
            </div>
            <div className='cardList'>
              {filtered.map((sneaker) => {
                const cartItem = cartItems.find((item) => item.id === sneaker.id)
                return (
                  <SneakerCard
                    key={sneaker.id}
                    sneaker={{ ...sneaker, cartId: cartItem?.cartId }}
                    onAddToCart={handleAddToCart}
                    onRemoveFromCart={handleRemoveFromCart}
                    isAdded={!!cartItem}
                    isLiked={liked.some((item) => item.id === sneaker.id)}
                    onLike={() => handleLike(sneaker)}
                  />
                )
              })}
            </div>
          </div>
        </>
      )}

      {activeTab === 'likes' && (
        <div>
          <h2 style={{ margin: '30px' }}>Избранное</h2>
          {liked.length === 0 ? (
            <div className='emptyLiked'>
              <img src='./img/sad.svg' className='emptyLikedImage' />
              <h2>Закладок нет :(</h2>
              <p>Вы ничего не добавляли в закладки</p>
            </div>
          ) : (
            <div className='card-list'>
              {liked.map((like) => (
                <div className='card' key={like.id}>
                  <img className='card__image' src={like.img} alt={like.title} style={{ width: 100, height: 'auto' }} />
                  <p>{like.title}</p> {like.price}
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {activeTab === 'user' && (
        <div>
          <h2 style={{ margin: '30px' }}>Мои покупки</h2>
          {orders.length === 0 ? (
            <div className='emptyLiked'>
              <img src='./img/sad.svg' className='emptyLikedImage' />
              <h2>Покупок нет :(</h2>
              <p>Оформите хотя бы один заказ.</p>
            </div>
          ) : (
            <div className='card-list'>
              {orders.map((order) => (
                <div className='card' key={order.Id}>
                  <img
                    className='card__image'
                    src={order.img}
                    alt={order.title}
                    style={{ width: 100, height: 'auto' }}
                  />
                  <p>{order.title}</p> {order.price}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
