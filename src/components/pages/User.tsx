import type { Sneaker } from '../SneakerList'

interface UserProps {
  orders: Sneaker[]
}

export const User = ({ orders }: UserProps) => {
  return (
    <div className='wrapper'>
      <h2 style={{ margin: '30px' }}>Мои покупки</h2>
      {orders.length === 0 ? (
        <div className='emptyLiked'>
          <img src='./img/sad.svg' className='emptyLikedImage' />
          <h2>Покупок нет :(</h2>
          <p>Оформите хотя бы один заказ.</p>
        </div>
      ) : (
        <div className='cardList'>
          {orders.map((order) => (
            <div className='card' key={order.id}>
              <img className='card__image' src={order.img} alt={order.title} style={{ width: 100, height: 'auto' }} />
              <p>{order.title}</p> {order.price}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
