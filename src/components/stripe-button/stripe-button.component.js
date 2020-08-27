import React from 'react'

import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100
  const publishableKey = 'pk_test_51HKpgzEEsSGEuhRbCcjuvHUXN1tpMjBhxhFdddmHrVm7zV1mwIdAdPrO2V1jJ6W9CYCNWQpixaMXjiPp5lTTcKyL00ZyiGZWdV'
  const onToken = token => {
    console.log(token)
    alert('Payment Successfull')
  }
  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton