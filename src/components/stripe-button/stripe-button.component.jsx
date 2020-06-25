import React from "react"
import StripeCheckout from "react-stripe-checkout"

const StripeCheckoutButton = ({ price }) => {
  const publishableKey = "pk_test_51GrbJIIbDjD5mQOyuouuNQ6sKqRl9mN6Y5uad1w16PLeHhRiTiRSgKKo39ondwi5QLoWSMAQp5BkGX3gbfz2UEUl00n6FfbBUX"

  const onToken = token => {
    console.log(token)
    alert("Thank you")
  }

  return (
    <StripeCheckout name='HOBBE' billingAddress shippingAddress description={`合計金額は￥${price}です`} amount={price} panelLabel='購入する' token={onToken} stripeKey={publishableKey} locale='ja' currency='jpy'>
      <button className='btn'>クレジットカード決済</button>
    </StripeCheckout>
  )
}

export default StripeCheckoutButton
