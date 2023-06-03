import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useAxiosSecure } from "../../../../hooks/useAxiosSecure";
import { useAuth } from "../../../../hooks/useAuth";

const Checkout = ({ cart, price }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [axiosSecure] = useAxiosSecure();
    const [clientSecret, setClientSecret] = useState("");
    const { user } = useAuth();
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');

    useEffect(() => {
        if (price > 0) {
            axiosSecure.post('/create-payment-intent', { price })
                .then(res => {
                    console.log(res.data.clientSecret)
                    setClientSecret(res.data.clientSecret)
                })
        }
    }, [price, axiosSecure]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error.message,
            })
        } else {
            console.log('[PaymentMethod]', paymentMethod);
        }
        setProcessing(true);

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user?.displayName || "no name",
                        email: user?.email || "no email"
                    }
                }
            }
        )
        if (confirmError) {
            console.log(confirmError);
        }
        console.log(paymentIntent);
        setProcessing(false);
        if (paymentIntent.status === "succeeded") {
            const payment = {
                email: user?.email,
                transactionId: paymentIntent.id,
                price,
                date: new Date(),
                quantity: cart.length,
                cartItems: cart.map(item => item._id),
                menuItems: cart.map(item => item.orderFoodId),
                itemsName: cart.map(item => item.name),
                status: "service pending"
            }
            axiosSecure.post('/payments', payment)
                .then((res) => {
                    if (res.data.insertResult.insertedId) {
                        console.log(res.data);
                        Swal.fire({
                            title: 'Payment successful',
                            text: "Your transaction ID: " + paymentIntent.id,
                            icon: 'success',
                            showCancelButton: false,
                            confirmButtonColor: '#3085d6',
                            confirmButtonText: 'Ok'
                        }).then((result) => {
                            if (result.isConfirmed) {
                                setTransactionId(paymentIntent.id);
                            }
                        })
                    }
                })
        }

    }

    return (
        <form className="md:w-1/2 mx-auto flex flex-col space-y-10" onSubmit={handleSubmit}>
            <h1 className="text-3xl text-center">Payment</h1>
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
            <button className="btn btn-primary w-1/2 mx-auto mt-10" type="submit" disabled={!stripe || !clientSecret || processing}>
                Pay
            </button>
            {transactionId && <h2 className="text-xl">Your transaction id: <span className="font-bold">{transactionId}</span></h2>}
        </form>
    );
};

export default Checkout;