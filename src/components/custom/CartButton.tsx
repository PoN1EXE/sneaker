import './../../index.scss'

interface CartButtonProps {
  onClick?: () => void
}

export const CartButton = ({ onClick }: CartButtonProps) => {
  return (
    <button className='button-cart' onClick={onClick}>
      <img src='/img/cart.svg' alt='Cart' className='button-image-cart' />
    </button>
  )
}
