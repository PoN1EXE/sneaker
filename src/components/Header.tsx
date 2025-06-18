import './../index.scss'
import { SneakerCard } from './SneakerCard'

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
      <div className='content'>
        <h1>Все кроссовки</h1>
        ....
        <SneakerCard />
      </div>
    </div>
  )
}
