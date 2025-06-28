import './../index.scss'
import type { Sneaker } from './SneakerList'

export interface Props {
  sneaker: Sneaker & { cartId?: string }
  onAddToCart: (sneaker: Sneaker) => void
  onRemoveFromCart: (cartId: string) => void
  isAdded: boolean
  isLiked: boolean
  onLike: () => void
}

export const SneakerCard = ({ sneaker, onAddToCart, onRemoveFromCart, isAdded, onLike, isLiked }: Props) => {
  const handleAddClick = () => {
    if (isAdded && sneaker.cartId) {
      onRemoveFromCart(sneaker.cartId)
    } else {
      onAddToCart(sneaker)
    }
  }

  return (
    <div className='card'>
      <button className='card__like-button' onClick={onLike}>
        <img
          src={isLiked ? '/img/accept.svg' : '/img/like.svg'}
          alt='like'
          width={11}
          height={11}
          className='button-image'
        />
      </button>
      <img className='card__image' src={sneaker.img} alt={sneaker.title} width={133} height={112} />
      <p className='card__description'>{sneaker.title}</p>
      <div className='card__footer'>
        <div className='card__price-info'>
          <span className='card__price-label'>Цена:</span>
          <p className='card__price-value'>{sneaker.price}</p>
        </div>
        <button className='card__add-button' onClick={handleAddClick}>
          <img
            width={11}
            height={11}
            src={isAdded ? '/img/accept.svg' : '/img/Vector.svg'}
            alt='add'
            className='button-image'
          />
        </button>
      </div>
    </div>
  )
}
