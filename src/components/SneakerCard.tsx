import './../index.scss'

export const SneakerCard = () => {
  return (
    <div className='card'>
      <button className='card__like-button'>
        <img src='/img/like.svg' alt='like' width={11} height={11} />
      </button>
      <img className='card__image' src='/img/sn1.jpg' alt='Nike Blazer Mid Suede' width={133} height={112} />
      <p className='card__description'>Мужские Кроссовки Nike Blazer Mid Suede</p>
      <div className='card__footer'>
        <div className='card__price-info'>
          <span className='card__price-label'>Цена:</span>
          <p className='card__price-value'>12 999 руб.</p>
        </div>
        <button className='card__add-button'>
          <img width={11} height={11} src='/img/Vector.svg' alt='add' />
        </button>
      </div>
    </div>
  )
}
