import { Link } from 'react-router-dom'
import { CartButton } from './custom/CartButton'
import { LikeButton } from './custom/LikeButton'
import { UserButton } from './custom/UserButton'
import { ModalBar } from './ModalBar'
import type { Sneaker } from './SneakerList'

type CartItem = Sneaker & { cartId: string }

interface HeaderProps {
  isOrdered: boolean
  modalBarIsOpen: boolean
  cartItems: CartItem[]
  onOpenModal: () => void
  onCloseModal: () => void
  onRemoveFromCart: (cartId: string) => void
  onCheckout: () => void
}

export const HeaderBar = ({
  cartItems,
  isOrdered,
  modalBarIsOpen,
  onOpenModal,
  onCloseModal,
  onRemoveFromCart,
  onCheckout,
}: HeaderProps) => {
  return (
    <header className='headerLeft'>
      <Link to='/' className='headerLeft'>
        <img src='/img/HeaderLogo.svg' alt='React Sneaker' className='img' />
        <div className='headerInfo'>
          <h3>REACT SNEAKER</h3>
          <p>Магазин лучших кроссовок</p>
        </div>
      </Link>

      <ul className='headerRight'>
        <li>
          <CartButton onClick={onOpenModal} />
        </li>
        <li>
          <Link to='/liked'>
            <LikeButton />
          </Link>
        </li>
        <li>
          <Link to='/user'>
            <UserButton />
          </Link>
        </li>
      </ul>

      <ModalBar
        isOpen={modalBarIsOpen}
        onClose={onCloseModal}
        onRemoveFromCart={onRemoveFromCart}
        onCheckout={onCheckout}
        isOrdered={isOrdered}
        cartItems={cartItems}
      />
    </header>
  )
}
