import './../../index.scss'

interface UserButtonProps {
  onClick?: () => void
}

export const UserButton = ({ onClick }: UserButtonProps) => {
  return (
    <button className='button-cart' onClick={onClick}>
      <img src='/img/user.svg' alt='Профиль' className='button-image-cart' />
    </button>
  )
}
