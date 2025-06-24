import Modal from 'react-modal'
import type { Sneaker } from './SneakerList'
import { CartSneakerPart } from './CartSneakerPart'

Modal.setAppElement('#root')

type ModalBarProps = {
  isOpen: boolean
  onClose: () => void
  cartItems: (Sneaker & { cartId: string })[]
  onRemoveFromCart: (cartId: string) => void
}

const parsePrice = (price: string) => Number(price.replace(/\s|руб\.?/g, ''))

export const ModalBar = ({ isOpen, onClose, cartItems, onRemoveFromCart }: ModalBarProps) => {
  const total = cartItems.reduce((sum, item) => sum + parsePrice(item.price), 0)
  const tax = total * 0.05
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} ariaHideApp={false}>
      <div className='modal'>
        <h2>Корзина</h2>

        <div className='modal__items'>
          {cartItems.map((item) => (
            <CartSneakerPart key={item.cartId} sneaker={item} onRemoveFromCart={() => onRemoveFromCart(item.cartId)} />
          ))}
        </div>

        <div>
          <p>Итого: {total} руб.</p>
          <p>Налог 5%: {tax.toFixed(2)} руб.</p>
        </div>

        <button className='modal__order-button'>Оформить заказ</button>
      </div>
    </Modal>
  )
}
