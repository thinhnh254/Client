import React from "react";
import { useSelector } from "react-redux";

const DetailsCart = () => {
  const { current } = useSelector((state) => state.user);
  return (
    <div className="w-full">
      <div className="h-[81px] flex justify-center items-center bg-gray-100">
        <div className="w-main">
          <h3 className="font-semibold uppercase">My-cart</h3>
        </div>
      </div>

      <div className="w-main mx-auto font-bold my-8 border py-3 grid grid-cols-10">
        <div className="col-span-6 w-full text-center">Products</div>
        <div className="col-span-1 w-full text-center">Quantity</div>
        <div className="col-span-3 w-full text-center">Price</div>
      </div>
    </div>
  );
};

export default DetailsCart;
