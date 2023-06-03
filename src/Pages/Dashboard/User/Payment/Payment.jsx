import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import Checkout from "./Checkout";
import useCart from "../../../../hooks/useCart";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK)
const Payment = () => {
    const [cart] = useCart();
    const total = cart.reduce((sum, item) => sum+item.price, 0);
    const price = parseFloat(total.toFixed(2))
    return (
        <div>
            <SectionTitle width={"md:w-5/12"} subHeading={"Ready to payment?"} heading={"Payment Now"} />
            <div className="flex flex-col items-center justify-center">
                <Elements stripe={stripePromise}>
                    <Checkout cart={cart} price={price}/>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;