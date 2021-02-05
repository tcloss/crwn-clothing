import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const onToken = (token) => {
    console.log(`Stripe token ${token}`)
    alert('Payment Complete')
}

const StripeCheckoutButton = ( { price } ) => {
    const totalInCents = price * 100
    const publishableKey = 'pk_test_51IHYBWDMepyyJwNTsb4EMOjBRblBkBI8Whbr8tPEv216ZPeAhDaQbsdlebZNT4Nqe5t7qwY5TgdeuOfZE43GqmDB00rjeQqLeC'

    return (
        <StripeCheckout
            label='Pay Now'
            name='Crown Clothiers Ltd'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total price is $${price}`}
            amount={totalInCents}
            panelLabel='Pay Now'
            token={onToken}
            stripKey={publishableKey}
            />    
        )
}

export default StripeCheckoutButton;