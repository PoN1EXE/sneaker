import type { Sneaker } from '../SneakerList'

interface LikedProps {
  liked: Sneaker[]
}

export const Liked = ({ liked }: LikedProps) => {
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
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
