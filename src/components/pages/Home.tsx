import { useState } from 'react'
import { sneakers } from '../SneakerList'
import type { Sneaker } from '../SneakerList'
import { SneakerCard } from '../SneakerCard'

interface HomeProps {
  cartItems: { id: number }[]
  liked: Sneaker[]
  onAddToCart: (sneaker: Sneaker) => void
  onRemoveFromCart: (sneakerId: number) => void
  onLike: (sneaker: Sneaker) => void
}

export const Home = ({ cartItems, onAddToCart, onRemoveFromCart, liked, onLike }: HomeProps) => {
  const [input, setInput] = useState('')

  const filtered = sneakers.filter((sneaker) => sneaker.title.toLowerCase().includes(input.toLowerCase()))

  return (
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
          <h1>Все кроссовки</h1>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
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
            const isAdded = cartItems.some((item) => item.id === sneaker.id)
            const isLiked = liked.some((item) => item.id === sneaker.id)
            return (
              <SneakerCard
                key={sneaker.id}
                sneaker={sneaker}
                onAddToCart={onAddToCart}
                onRemoveFromCart={onRemoveFromCart}
                isAdded={isAdded}
                isLiked={isLiked}
                onLike={() => onLike(sneaker)}
              />
            )
          })}
        </div>
      </div>
    </>
  )
}
