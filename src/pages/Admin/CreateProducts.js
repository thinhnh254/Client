import React, { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { createProduct } from "../../apis";
import { Button, InputForm, MarkdownEditor, Select } from "../../components";

const CreateProducts = () => {
  const { categories } = useSelector((state) => state.app);
  const [payload, setPayload] = useState({
    description: "",
  });
  const [invalidFields, setInvalidFields] = useState([]);
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm();

  const changeValue = useCallback(
    (e) => {
      setPayload(e);
    },
    [payload]
  );

  const handleCreateProduct = async (data) => {
    if (data.category) {
      const selectedCategory = categories?.find(
        (el) => el._id === data.category
      );
      data.category = selectedCategory?._id;
    }
    const finalPayload = { ...data, ...payload };
    const formData = new FormData();

    for (let i of Object.entries(finalPayload)) {
      formData.append(i[0], i[1]);
    }

    if (finalPayload.images) {
      formData.append("images", finalPayload.images[0]);
    }

    const response = await createProduct(formData);
    if (response.success) {
      toast.success("Success");
      reset();
      setPayload({ images: "" });
    } else toast.error("Fail");
  };

  return (
    <div className="w-full text-xl">
      <h1 className="h-[75px] flex justify-between items-center text-6xl font-bold px-4 border-b border-white">
        <span>Create New Products</span>
      </h1>

      <div className="p-4 my-2 text-black">
        <form onSubmit={handleSubmit(handleCreateProduct)}>
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
            />
          </div>

          <div className="flex flex-col gap-2 mt-8">
            <label className="font-semibold" htmlFor="images">
              Upload Image Products
            </label>
            <input
              type="file"
              id="images"
              {...register("images", { required: "need fill" })}
            />
            {errors["products"] && (
              <small className="text-lg text-red-500">
                {errors["products"]?.message}
              </small>
            )}
          </div>

          <Button type="submit">Create New Product</Button>
        </form>
      </div>
    </div>
  );
};

export default CreateProducts;
