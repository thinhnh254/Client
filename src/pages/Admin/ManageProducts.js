import moment from "moment/moment";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { getProducts } from "../../apis/";
import { InputForm, Pagination } from "../../components/index";

const ManageProducts = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const [products, setProducts] = useState(null);
  const [counts, setCounts] = useState(0);

  const handleSearchProducts = (data) => {
    console.log(data);
  };

  const fetchProducts = async (params) => {
    const response = await getProducts({
      ...params,
      limit: process.env.REACT_APP_LIMIT,
    });
    if (response.success) {
      setCounts(response.counts);
      setProducts(response.products);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log(products);

  return (
    <div className="w-full pl-8 flex flex-col gap-4 relative">
      <div className="h-[69] w-full"></div>
      <div className="p-4 border-b w-full flex justify-between items-center">
        <h1 className="h-[75px] flex justify-between items-center text-6xl font-bold px-4">
          <span>Manage Product</span>
        </h1>
      </div>

      <div className="flex w-full justify-end items-center text-black px-4">
        <form className="w-[45%]" onSubmit={handleSubmit()}>
          <InputForm
            id="q"
            register={register}
            errors={errors}
            fullWidth
            placeholder="Search Product"
            style="my-6 mr-4"
          />
        </form>
      </div>

      <table className="table-auto">
        <thead className="font-bold bg-gray-700 text-[13px]">
          <tr className="border border-gray-500 text-white">
            <th className="text-center">#</th>
            <th className="text-center">Images</th>
            <th className="text-center">Title</th>
            <th className="text-center">Category</th>
            <th className="text-center">Price</th>
            <th className="text-center">Quantity</th>
            <th className="text-center">Sold</th>
            <th className="text-center">UdatedAt</th>
          </tr>
        </thead>

        <tbody>
          {products?.map((el, idx) => (
            <tr key={el._id} className="text-center py-2">
              <td>{idx + 1}</td>
              <td className="text-center py-2">
                <img
                  src={el.images}
                  alt="images"
                  className="w-20 h-20 m-auto object-cover"
                />
              </td>
              <td className="text-center py-2">{el.title}</td>
              <td className="text-center py-2">{el.brand}</td>
              <td className="text-center py-2">{el.price}</td>
              <td className="text-center py-2">{el.quantity}</td>
              <td className="text-center py-2">{el.sold}</td>
              <td className="text-center py-2">
                {moment(el.createdAt).format("DD/MM/YYYY")}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="w-full flex justify-end my-8">
        <Pagination totalCount={counts} />
      </div>
    </div>
  );
};

export default ManageProducts;
