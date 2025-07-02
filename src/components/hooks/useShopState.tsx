import { useState } from 'react'
import type { Sneaker } from './../SneakerList'

type CartItem = Sneaker & { cartId: string }

export const useShopState = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [orders, setOrders] = useState<Sneaker[]>([])
  const [liked, setLiked] = useState<Sneaker[]>([])
  const [modalBarIsOpen, setModalBarIsOpen] = useState(false)
  const [isOrdered, setIsOrdered] = useState(false)

  const handleAddToCart = (sneaker: Sneaker) => {
    if (!cartItems.some((item) => item.id === sneaker.id)) {
      setCartItems((prev) => [...prev, { ...sneaker, cartId: `cart-${Date.now()}` }])
    }
  }

  const handleRemoveFromCartBySneakerId = (sneakerId: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== sneakerId))
  }

  const handleRemoveFromCartByCartId = (cartId: string) => {
    setCartItems((prev) => prev.filter((item) => item.cartId !== cartId))
  }

  const openModal = () => setModalBarIsOpen(true)
  const closeModal = () => {
    setModalBarIsOpen(false)
    setIsOrdered(false)
  }

  const handleCheckout = () => {
    setOrders((prev) => [...prev, ...cartItems])
    setCartItems([])
    setIsOrdered(true)
  }

  const handleLike = (sneaker: Sneaker) => {
    setLiked((prev) =>
      prev.some((item) => item.id === sneaker.id) ? prev.filter((item) => item.id !== sneaker.id) : [...prev, sneaker]
    )
  }

  return {
    cartItems,
    orders,
    liked,
    modalBarIsOpen,
    isOrdered,
    handleAddToCart,
    handleRemoveFromCartBySneakerId,
    handleRemoveFromCartByCartId,
    openModal,
    closeModal,
    handleCheckout,
    handleLike,
  }
}
