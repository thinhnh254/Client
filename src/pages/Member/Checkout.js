import React from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import payment from "../../assets/payment.svg";
import { InputForm, Paypal } from "../../components/index";

const Checkout = () => {
  const { current } = useSelector((state) => state.user);
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
    watch,
  } = useForm();

  const totalPrice = current?.cart?.reduce((total, cartItem) => {
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
      <div className="flex flex-col justify-center items-center col-span-6 gap-6">
        <h2 className="text-2xl font-bold">Check out your order</h2>

        <table className="table-auto w-full">
          <thead>
            <tr className="border bg-gray-200">
              <th className="text-center p-2">Product</th>
              <th className="text-center p-2">Quantity</th>
              <th className="text-center p-2">Price</th>
            </tr>
          </thead>

          <tbody>
            {current?.cart.map((el) => (
              <tr className="border" key={el._id}>
                <td>{el.product.title}</td>
                <td>{el.quantity}</td>
                <td>{el.product.price}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="text-xl flex justify-end items-end">{totalPrice}$</div>

        <InputForm
          label="Your address"
          register={register}
          errors={errors}
          id="address"
          validate={{
            required: "Need fill this field",
          }}
          placeholder="Enter you address"
        />

        <Paypal amount={totalPrice} />
      </div>
    </div>
  );
};

export default Checkout;
