import './../index.scss'
import type { Sneaker } from './SneakerList'

export type Props = {
  sneaker: Sneaker
}

export const SneakerCard = ({ sneaker }: Props) => {
  return (
    <div className='card'>
      <button className='card__like-button'>
        <img src={'/img/like.svg'} alt='like' width={11} height={11} className='button-image' />
      </button>
      <img className='card__image' src={sneaker.img} alt={sneaker.title} width={133} height={112} />
      <p className='card__description'>{sneaker.title}</p>
      <div className='card__footer'>
        <div className='card__price-info'>
          <span className='card__price-label'>Цена:</span>
          <p className='card__price-value'>{sneaker.price}</p>
        </div>
        <button className='card__add-button'>
          <img width={11} height={11} src='/img/Vector.svg' alt='add' className='button-image' />
        </button>
      </div>
    </div>
  )
}
