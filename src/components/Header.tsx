import './../index.scss'
import { SneakerCard } from './SneakerCard'
import { sneakers } from './SneakerList'

export const Header = () => {
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
            <img src='/img/cart.svg' className='cart' />
            <span>1000 руб. </span>
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
      <div>
        <img src='/img/frog.png' className='bigPic' />
      </div>
      <div className='content'>
        <div style={{ marginLeft: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
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
          {sneakers.map((sneaker) => (
            <SneakerCard key={sneaker.id} sneaker={sneaker} />
          ))}
        </div>
      </div>
    </div>
  )
}
