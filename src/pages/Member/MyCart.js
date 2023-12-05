import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Order } from "../../components/index";

const MyCart = () => {
  const { current } = useSelector((state) => state.user);
  const [subtotal, setSubtotal] = useState(0);

  const updateSubtotal = () => {
    const newSubtotal = current?.cart?.reduce(
      (total, el) => total + el.product.price * el.quantity,
      0
    );
    setSubtotal(newSubtotal);
  };

  useEffect(() => {
    updateSubtotal();
  }, [current]);

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
        {current?.cart?.map((el) => (
          <Order key={el._id} el={el} updateSubtotal={updateSubtotal} />
        ))}
      </div>

      <div className="w-main mx-auto flex flex-col my-6 justify-center items-end gap-3 mx-4">
        <span className="flex items-center text-3xl gap-8">
          <span>Subtotal:</span>
          <span className="text-red-400">
            {/* {`${current?.cart?.reduce(
              (sum, el) => +el.product?.price + sum,
              0
            )}`} */}
            {subtotal}
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
