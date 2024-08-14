import React, { useState } from 'react';
import { CardElement, useStripe, useElements, Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const appearance = {
    theme: 'stripe'
  };
const stripePromise = loadStripe('your_stripe_public_key');
const options = { appearance: appearance };
function DonationForm() {
    const stripe = useStripe();
    const elements = useElements();
    const [amount, setAmount] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const cardElement = elements.getElement(CardElement);

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            
            alert('Errore nella transazione: ' + error.message);
        } else {
            
            
            const response = await fetch('/api/donate', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({ amount, payment_method_id: paymentMethod.id }),
            });
            const data = await response.json();
            alert(data.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Importo della donazione" />
            <CardElement />
            <button type="submit" disabled={!stripe}>Dona</button>
        </form>
    );
}

export default function DonationWidget() {
    return (
        <Elements stripe={stripePromise} options={options}>
            <DonationForm />
        </Elements>
    );
}