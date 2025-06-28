import Modal from 'react-modal'
import type { Sneaker } from './SneakerList'
import { CartSneakerPart } from './CartSneakerPart'

Modal.setAppElement('#root')

interface ModalBarProps {
  isOpen: boolean
  onClose: () => void
  cartItems: (Sneaker & { cartId: string })[]
  onRemoveFromCart: (cartId: string) => void
  onCheckout: () => void
  isOrdered: boolean
}

const parsePrice = (price: string) => Number(price.replace(/\s|руб\.?/g, ''))

export const ModalBar = ({ isOpen, onClose, cartItems, onRemoveFromCart, onCheckout, isOrdered }: ModalBarProps) => {
  const total = cartItems.reduce((sum, item) => sum + parsePrice(item.price), 0)
  const tax = total * 0.05

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} ariaHideApp={false} className='drawer'>
      <div className='modal'>
        <h2>Корзина</h2>

        {isOrdered ? (
          <div className='drawer__empty-cart'>
            <img src='./img/buy.svg' alt='Успешно оформлено' className='drawer__empty-image' />
            <h2>Заказ оформлен!</h2>
            <p>Ваш заказ #18 скоро будет передан курьерской доставке</p>
            <button className='drawer__order-button' onClick={onClose}>
              Вернуться назад
            </button>
          </div>
        ) : (
          <>
            <div className='drawer__items'>
              {cartItems.length > 0 ? (
                cartItems.map((item) => (
                  <CartSneakerPart
                    key={item.cartId}
                    sneaker={item}
                    onRemoveFromCart={() => onRemoveFromCart(item.cartId)}
                  />
                ))
              ) : (
                <div className='drawer__empty-cart'>
                  <img src='./img/box.svg' className='drawer__empty-image' />
                  <h2>Упс... Корзина пуста...</h2>
                  <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
                  <button className='drawer__order-button' onClick={onClose}>
                    Вернуться назад
                  </button>
                </div>
              )}
            </div>

            {cartItems.length > 0 && (
              <>
                <div className='drawer__footer'>
                  <p>Итого:..........................{total} руб.</p>
                  <p>Налог 5%:.................. {tax.toFixed(2)} руб.</p>
                </div>

                <button className='drawer__order-button' onClick={onCheckout}>
                  Оформить заказ
                </button>
              </>
            )}
          </>
        )}
      </div>
    </Modal>
  )
}
