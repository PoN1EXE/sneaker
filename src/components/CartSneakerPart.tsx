import './../index.scss'
import type { Sneaker } from './SneakerList'

export type Props = {
  sneaker: Sneaker
  onRemoveFromCart: (id: number) => void
}

export const CartSneakerPart = ({ sneaker, onRemoveFromCart }: Props) => {
  return (
    <div className='card'>
      <img className='card__image' src={sneaker.img} alt={sneaker.title} width={133} height={112} />
      <p className='card__description'>{sneaker.title}</p>
      <div className='card__footer'>
        <div className='card__price-info'>
          <p className='card__price-value'>{sneaker.price}</p>
        </div>
        <button className='card__del-button' onClick={() => onRemoveFromCart(sneaker.id)}>
          <img width={11} height={11} src='/img/del.svg' alt='del' className='button-image' />
        </button>
      </div>
    </div>
  )
}
