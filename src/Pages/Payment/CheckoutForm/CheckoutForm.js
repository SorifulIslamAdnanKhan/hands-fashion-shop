import React, { useEffect, useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

const CheckoutForm = ({order}) => {
    console.log(order);
    const {_id,productId, resalePrice, name, email} = order;
    
    const [processing, setProcessing] = useState(false);
    const [success, setSuccess] = useState('');
    const [trransactionId, setTrransactionId] = useState('');
    const [cardError, setCardError] = useState('');
    
    const [clientSecret, setClientSecret] = useState("");
    const stripe = useStripe();
    const elements = useElements();

    useEffect(() => {
        fetch(`http://localhost:5000/create-payment-intent`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `bearer ${localStorage.getItem('accessAuthToken')}`
            },
            body: JSON.stringify({ resalePrice }),
        })
            .then((res) => res.json())
            .then((data) => {
                setClientSecret(data.clientSecret);
            });
    }, [resalePrice]);

    const handleSubmit = async (event) =>{
        event.preventDefault();
        
        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        if (error) {
            setCardError(error.message)
        }
        else {
            setCardError('');
        }

        setSuccess('');
        setProcessing(true);

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: name,
                        email: email,
                    },
                },
            },
        );

        if (confirmError) {
            setCardError(confirmError.message);
            return
        }

        if (paymentIntent.status === "succeeded") {

            console.log('card info', card);

            // store payment info to the database

            const paymentInfo = {
                resalePrice,
                transactionId: paymentIntent.id,
                email,
                orderId: productId,


            }

            fetch('http://localhost:5000/payments', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    authorization: `bearer ${localStorage.getItem('accessAuthToken')}`

                },
                body: JSON.stringify(paymentInfo)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.insertedId) {
                        setSuccess('Congrats! Your payment has completed');
                        setTrransactionId(paymentIntent.id);
                    }
                })

        }
        setProcessing(false);

    }
    
    return (
        <div>
            <>
                <form onSubmit={handleSubmit}>
                    <CardElement
                        options={{
                            style: {
                                base: {
                                    fontSize: '16px',
                                    color: '#424770',
                                    '::placeholder': {
                                        color: '#aab7c4',
                                    },
                                },
                                invalid: {
                                    color: '#9e2146',
                                },
                            },
                        }}
                    />
                    <button
                        className='btn btn-primary btn-sm mt-4'
                        type="submit"
                        disabled={!stripe || !clientSecret || processing}>
                        Pay
                    </button>
                </form>
                <p className='text-red-600'>{cardError}</p>
                {
                    success && <div>
                        <p className='text-green-500'>{success}</p>
                        <p>Your transactionId: <span className='font-bold'>{trransactionId}</span></p>
                    </div>
                }
            </>
        </div>
    );
};

export default CheckoutForm;