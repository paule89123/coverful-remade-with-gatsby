import React, { useContext } from 'react'

import StoreContext from '~/context/StoreContext'
import LineItem from './LineItem'
import { Link } from 'gatsby'

const Cart = () => {
  const {
    store: { checkout },
    
  } = useContext(StoreContext)

  const handleCheckout = () => {
    window.open(checkout.webUrl)
  }

  const line_items = checkout.lineItems.map(line_item => {
    return <Link to={"/products/" + line_item.variant.product.handle}><LineItem key={line_item.id.toString()} line_item={line_item} /></Link>
  })

  let quantityArr = checkout.lineItems.map(line_item => line_item.quantity)

  let numberOfItems = 0

  if (quantityArr[0]) {
    numberOfItems = quantityArr.reduce((acc, item) => acc + item)
  } 

  return (
    <div>
      {line_items}
      <h2>Subtotal</h2>
      <p>£{numberOfItems > 2 ? checkout.subtotalPrice - 10 : checkout.subtotalPrice}</p>
      <p>{numberOfItems > 2 && "Discount applied"}</p>
      <br />
      <br />
      <h2>Total</h2>
      <p>£{numberOfItems > 2 ? checkout.totalPrice - 10 : checkout.totalPrice}</p>
      <br />
      <button onClick={handleCheckout} disabled={checkout.lineItems.length === 0}>Check out</button>
    </div>
  )
}

export default Cart
