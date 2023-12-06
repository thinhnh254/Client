import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import payment from "../../assets/payment.svg";
import { Congrat, InputForm, Paypal } from "../../components/index";
import { getCurrent } from "../../store/user/asyncActions";

const Checkout = () => {
  const { currentCart } = useSelector((state) => state.user);
  const [isSuccess, setIsSuccess] = useState(false);
  const dispatch = useDispatch();

  const {
    register,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (isSuccess) {
      dispatch(getCurrent());
    }
  }, [isSuccess]);

  return (
    <div className="p-8 grid grid-cols-10 h-full max-h-screen overflow-y-auto gap-6">
      {isSuccess && <Congrat />}
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
            {currentCart.map((el) => (
              <tr className="border" key={el._id}>
                <td>{el?.product?.title}</td>
                <td>{el?.quantity}</td>
                <td>{el?.product?.price}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="text-xl flex justify-end items-end">
          {`${currentCart?.reduce(
            (sum, el) => +el?.product?.price * el?.quantity + sum,
            0
          )}`}
          $
        </div>

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

        <Paypal
          payload={{
            products: currentCart,
            total: currentCart?.reduce(
              (sum, el) => +el?.product?.price * el?.quantity + sum,
              0
            ),
          }}
          setIsSuccess={setIsSuccess}
          amount={currentCart?.reduce(
            (sum, el) => +el?.product?.price * el?.quantity + sum,
            0
          )}
        />
      </div>
    </div>
  );
};

export default Checkout;
