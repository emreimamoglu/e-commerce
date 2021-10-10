import React from "react";
import StripeCheckout from "react-stripe-checkout";
import './stripe-button.styles.scss';


const StripeButton = ({price}) => {

    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51Jj4nFLaeVM7CfS1PD2AixlSwqsDy9cS9AfeK5P3RVsLpudTMTkd9VEkwC6OAgKJkm1OdtMVwJwPc3lU2rZsnapB00RbCOevjW';
    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }
    return(
        <StripeCheckout
        label ='Pay Now'
        name = 'CRWN Clothing'
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

export default StripeButton;