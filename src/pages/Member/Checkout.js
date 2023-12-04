import React from "react";
import { useSelector } from "react-redux";
import { PayPalButton } from "react-paypal-button-v2";
import payment from "../../assets/payment.svg";

const Checkout = () => {
  const { current } = useSelector((state) => state.user);

  const totalPrice = current.cart.reduce((total, cartItem) => {
    const { product, quantity } = cartItem;
    const itemPrice = product.price * quantity;
    return total + itemPrice;
  }, 0);

  const handlePaymentSuccess = (details, data) => {
    // Handle success action after payment
    console.log("Payment successful:", details);
  };

  return (
    <div className="p-8 grid grid-cols-10 h-full max-h-screen overflow-y-auto gap-6">
      <div className="w-full flex justify-center items-center col-span-4">
        <img src={payment} alt="payment" className="h-[70%] object-contain" />
      </div>
      <div className="flex flex-col items-center col-span-6 gap-6">
        <h2 className="text-2xl font-bold">Check out your order</h2>
        {/* Content for displaying products */}
        <div className="text-xl">{totalPrice}$</div>
        <div className="flex flex-col items-center space-y-4">
          {/* Input address */}
          <input
            type="text"
            placeholder="Enter address"
            className="border border-gray-300 rounded-md px-3 py-2 w-full max-w-md focus:outline-none focus:ring focus:border-blue-300"
          />
          {/* PayPal payment button */}
          <PayPalButton
            amount={totalPrice}
            onSuccess={handlePaymentSuccess}
            options={{
              clientId: "YOUR_PAYPAL_SANDBOX_CLIENT_ID",
              currency: "USD",
            }}
            onError={(error) =>
              console.error("PayPal SDK could not be loaded", error)
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
