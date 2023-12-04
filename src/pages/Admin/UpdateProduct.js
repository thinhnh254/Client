import React, { memo, useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { updateProduct } from "../../apis/product";
import { Button, InputForm, MarkdownEditor, Select } from "../../components";

const UpdateProduct = ({ editProduct, render, setEditProduct }) => {
  const { categories } = useSelector((state) => state.app);

  const [payload, setPayload] = useState({
    description: "",
  });

  // const [preview, setPreview] = useState({ images: [] });

  useEffect(() => {
    reset({
      title: editProduct?.title || "",
      price: editProduct?.price || "",
      quantity: editProduct?.quantity || "",
      category: editProduct?.category || "",
      images: editProduct?.images || "",
    });
    setPayload({
      description:
        editProduct?.description === "object"
          ? editProduct?.description?.join(",")
          : editProduct?.description,
    });
    // setPreview({
    //   images: editProduct?.images || [],
    // });
  }, [editProduct]);

  const [invalidFields, setInvalidFields] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const changeValue = useCallback(
    (e) => {
      setPayload(e);
    },
    [payload]
  );

  const handleUpdateProduct = async (data) => {
    if (data.category) {
      const selectedCategory = categories?.find(
        (el) => el._id === data.category
      );
      data.category = selectedCategory?._id;
    }
    console.log(editProduct?.images);
    const finalPayload = { ...data, ...payload };
    console.log(finalPayload);
    const formData = new FormData();

    for (let i of Object.entries(finalPayload)) {
      formData.append(i[0], i[1]);
    }

    if (finalPayload?.images?.length > 0) {
      formData.append("images", finalPayload?.images[0]);
    }

    delete finalPayload.images;

    const response = await updateProduct(formData, editProduct._id);
    if (response.success) {
      toast.success("Success");
      reset();
      // setPayload({ images: "" });
    } else toast.error("Fail");
  };

  return (
    <div className="w-full flex flex-col gap-4 relative text-black bg-orange-400">
      <div className="h-[69px] w-full"></div>
      <div className="p-4 border-b w-full bg-orange-400 flex justify-between items-center fixed top-0">
        <h1 className="text-3xl font-bold tracking-tight">Update Product</h1>
      </div>

      <div className="p-4 my-2 text-black">
        <span
          className="text-red-500 hover:underline cursor-pointer flex justify-end"
          onClick={() => setEditProduct(null)}
        >
          Cancel
        </span>
        <form onSubmit={handleSubmit(handleUpdateProduct)}>
          <InputForm
            label="Name Product"
            register={register}
            errors={errors}
            id={"title"}
            validate={{
              required: "Need fill this feild",
            }}
            fullWidth
            placeholder="Name of new product"
          />

          <div className="w-full flex gap-4 my-14">
            <InputForm
              label="Price"
              register={register}
              errors={errors}
              id={"price"}
              validate={{
                required: "Need fill this feild",
              }}
              style="flex-1"
              placeholder="Price of new product"
              type="number"
              fullWidth
            />

            <InputForm
              label="Quantity"
              register={register}
              errors={errors}
              id={"quantity"}
              validate={{
                required: "Need fill this feild",
              }}
              style="flex-1"
              placeholder="Quantity of new product"
              type="number"
              fullWidth
            />
          </div>

          <div className="w-full my-6 flex gap-4">
            <Select
              label="Category"
              options={categories?.map((el) => ({
                code: el._id,
                value: el.title,
              }))}
              register={register}
              id={"category"}
              validate={{ required: "Need fill this field" }}
              style="flex-auto"
              errors={errors}
            />
          </div>

          <div className="my-10">
            <MarkdownEditor
              name="description"
              changeValue={changeValue}
              label="Description"
              invalidFields={invalidFields}
              setInvalidFields={setInvalidFields}
              value={payload.description}
            />
          </div>

          <div className="flex flex-col gap-2 mt-8">
            <label className="font-semibold" htmlFor="images">
              Upload Image Products
            </label>
            <img
              src={editProduct?.images}
              alt="images"
              className="w-20 h-20 ml-8 object-cover rounded-full cursor-pointer"
            />
            <input type="file" id="images" {...register("images")} />
            {errors["products"] && (
              <small className="text-lg text-red-500">
                {errors["products"]?.message}
              </small>
            )}
          </div>

          <Button type="submit">Update Product</Button>
        </form>
      </div>
    </div>
  );
};

export default memo(UpdateProduct);
