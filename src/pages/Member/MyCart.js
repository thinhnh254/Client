import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Order } from "../../components/index";
import { updateCart } from "../../store/user/userSlice";

const MyCart = () => {
  const { currentCart } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleChangeQuantities = (pid, quantity) => {
    // console.log({ pid, quantity });
    // console.log(currentCart);
    dispatch(updateCart({ pid, quantity }));
  };

  return (
    <div className="w-full">
      <div className="h-[81px] flex justify-center items-center bg-gray-100">
        <div className="w-main">
          <h3 className="font-semibold uppercase text-6xl">My-cart</h3>
        </div>
      </div>

      <div className="border">
        <div className="w-main mx-auto font-bold my-8 border py-3 flex text-3xl bg-gray-500">
          <div className="col-span-6 w-full text-center">Products</div>
          <div className="col-span-1 w-full text-center">Quantity</div>
          <div className="col-span-3 w-full text-center">Price</div>
          <div className="col-span-3 w-full text-center">Action</div>
        </div>
        {currentCart?.map((el) => (
          <Order
            key={el._id}
            handleChangeQuantities={handleChangeQuantities}
            el={el}
            defaultQuantity={el.quantity}
          />
        ))}
      </div>

      <div className="w-main mx-auto flex flex-col my-6 justify-center items-end gap-3 mx-4">
        <span className="flex items-center text-3xl gap-8">
          <span>Subtotal:</span>
          <span className="text-red-400">
            {`${currentCart?.reduce(
              (sum, el) => +el?.product?.price * el?.quantity + sum,
              0
            )}`}
          </span>
        </span>
        <Link to="/checkout">
          <Button>Checkout</Button>
        </Link>
      </div>
    </div>
  );
};

export default MyCart;
