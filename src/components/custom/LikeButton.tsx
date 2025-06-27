import './../../index.scss'

type LikeButtonProps = {
  onClick?: () => void
}

export const LikeButton = ({ onClick }: LikeButtonProps) => {
  return (
    <button className='button-cart' onClick={onClick}>
      <img src='/img/liked.svg' alt='Закладки' className='button-image-cart' />
    </button>
  )
}
