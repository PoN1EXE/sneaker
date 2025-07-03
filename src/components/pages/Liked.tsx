import '../../index.scss'
import type { Sneaker } from './../SneakerList'

interface LikedProps {
  liked: Sneaker[]
  isAdded: (id: number) => boolean
  onAddToCart: (sneaker: Sneaker) => void
  onRemoveFromCart: (sneakerId: number) => void
}

export const Liked = ({ liked, isAdded, onRemoveFromCart, onAddToCart }: LikedProps) => {
  const handleAddInLiked = (sneaker: Sneaker) => {
    if (isAdded(sneaker.id)) {
      onRemoveFromCart(sneaker.id)
    } else {
      onAddToCart(sneaker)
    }
  }

  return (
    <div className='wrapper'>
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
              <p>
                <button className='card__add-button' onClick={() => handleAddInLiked(like)}>
                  <img
                    width={11}
                    height={11}
                    src={isAdded(like.id) ? '/img/accept.svg' : '/img/Vector.svg'}
                    alt='add'
                    className='button-image'
                  />
                </button>
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
